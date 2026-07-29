from datetime import datetime, timezone
import os
import sqlite3
import base64
import smtplib
from email.message import EmailMessage
from collections import defaultdict
from time import time

from typing import Optional

from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, constr, ValidationError

DB_PATH = os.getenv("LEADS_DB", "leads.db")
ALLOWED_ORIGINS = [
    o.strip()
    for o in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:3002,https://iroofer-contractors-web.pages.dev",
    ).split(",")
    if o.strip()
]

# Simple in-memory rate limiter: {ip: [timestamps]}
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 5  # max submissions per window
_rate_limit_store = defaultdict(list)

# Email delivery -> iRoofer inbox
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "465"))
SMTP_USER = os.getenv("SMTP_USER", "iroofercontractors@gmail.com")
SMTP_PASS = os.getenv("SMTP_PASS", "")  # Gmail App Password
LEAD_TO = os.getenv("LEAD_TO", "iroofercontractors@gmail.com")

app = FastAPI(title="iRoofer Contractors — Lead API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        """CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT,
            address TEXT,
            service TEXT,
            how_soon TEXT,
            message TEXT,
            created_at TEXT NOT NULL,
            source TEXT
        )"""
    )
    # migrate: add source column if an older db exists without it
    cols = [r[1] for r in conn.execute("PRAGMA table_info(leads)").fetchall()]
    if "source" not in cols:
        conn.execute("ALTER TABLE leads ADD COLUMN source TEXT")
    conn.commit()
    conn.close()


init_db()


class LeadIn(BaseModel):
    fullName: constr(strip_whitespace=True, min_length=1, max_length=120)
    phone: constr(strip_whitespace=True, min_length=7, max_length=40)
    email: Optional[EmailStr] = None
    address: Optional[constr(strip_whitespace=True, max_length=200)] = None
    service: Optional[constr(strip_whitespace=True, max_length=80)] = None
    howSoon: Optional[constr(strip_whitespace=True, max_length=80)] = None
    message: Optional[constr(strip_whitespace=True, max_length=2000)] = None
    source: Optional[constr(strip_whitespace=True, max_length=60)] = None


def check_admin(request: Request):
    u = os.getenv("ADMIN_USER")
    p = os.getenv("ADMIN_PASS")
    if not u or not p:
        raise HTTPException(503, "Admin auth not configured")
    header = request.headers.get("Authorization", "")
    if not header.startswith("Basic "):
        raise HTTPException(401, "Invalid admin credentials")
    try:
        decoded = base64.b64decode(header[6:]).decode("utf-8")
    except Exception:
        raise HTTPException(401, "Invalid admin credentials")
    if decoded != f"{u}:{p}":
        raise HTTPException(401, "Invalid admin credentials")
    return True


@app.get("/api/health")
def health():
    return {"ok": True, "brand": "iRoofer Contractors"}


@app.post("/api/leads")
async def create_lead(request: Request):
    """Accept a lead submission as either JSON (recommended) or form-encoded data.

    The frontend previously submitted a plain HTML form (application/x-www-form-urlencoded),
    which FastAPI did not validate against the Pydantic model. To support both submission
    styles we inspect the Content-Type and parse accordingly, then validate with LeadIn.
    """
    now = datetime.now(timezone.utc).isoformat()

    # --- rate limiting ---
    client_ip = request.client.host if request.client else "unknown"
    window_start = time() - RATE_LIMIT_WINDOW
    timestamps = _rate_limit_store[client_ip]
    _rate_limit_store[client_ip] = [
        t for t in timestamps if t > window_start
    ]
    if len(_rate_limit_store[client_ip]) >= RATE_LIMIT_MAX:
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later.",
        )
    _rate_limit_store[client_ip].append(time())

    # Parse payload depending on Content-Type
    content_type = request.headers.get("content-type", "")
    try:
        if "application/json" in content_type:
            payload = await request.json()
        else:
            form = await request.form()
            # form is a MultiDict-like; convert to plain dict (keep first value)
            payload = {k: v for k, v in form.items()}

        # --- honeypot check ---
        if payload.get("_honeypot") or payload.get("website"):
            # silently accept so bot doesn't know it was blocked
            return JSONResponse(status_code=201, content={"id": None, "status": "received"})

        # Validate / coerce with Pydantic
        lead = LeadIn(**payload)
    except ValidationError as e:
        # Return Pydantic validation errors (422)
        return JSONResponse(status_code=422, content={"detail": e.errors()})
    except Exception:
        raise HTTPException(400, "Invalid request payload")

    conn = sqlite3.connect(DB_PATH)
    cur = conn.execute(
        "INSERT INTO leads (full_name, phone, email, address, service, how_soon, message, source, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (lead.fullName, lead.phone, lead.email, lead.address,
         lead.service, lead.howSoon, lead.message, lead.source, now),
    )
    conn.commit()
    lid = cur.lastrowid
    conn.close()
    send_lead_email(lead, now)
    return JSONResponse(status_code=201, content={"id": lid, "status": "received"})


def send_lead_email(lead: LeadIn, when: str):
    if not SMTP_PASS:
        return  # email not configured — lead is still saved above
    lines = [
        f"New roof lead — {when}",
        "",
        f"Name:    {lead.fullName}",
        f"Phone:   {lead.phone}",
        f"Email:   {lead.email or '(not provided)'}",
        f"Address: {lead.address or '(not provided)'}",
        f"Service: {lead.service or '(not specified)'}",
        f"Timing:  {lead.howSoon or '(not specified)'}",
        f"Source:  {lead.source or 'website'}",
        "",
        f"Message:",
        lead.message or "(none)",
    ]
    msg = EmailMessage()
    msg["Subject"] = f"New iRoofer lead: {lead.fullName} ({lead.phone})"
    msg["From"] = SMTP_USER
    msg["To"] = LEAD_TO
    msg.set_content("\n".join(lines))
    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as s:
            s.login(SMTP_USER, SMTP_PASS)
            s.send_message(msg)
    except Exception as e:
        print("lead email failed:", e)  # don't fail the API if mail errors


@app.get("/api/leads")
def list_leads(_: bool = Depends(check_admin)):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute("SELECT * FROM leads ORDER BY id DESC LIMIT 200").fetchall()
    conn.close()
    return {"leads": [dict(r) for r in rows]}
