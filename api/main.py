from datetime import datetime, timezone
import os
import sqlite3
import base64
import smtplib
from email.message import EmailMessage

from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.security import HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, constr

DB_PATH = os.getenv("LEADS_DB", "leads.db")
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")

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
    email: EmailStr | None = None
    address: constr(strip_whitespace=True, max_length=200) | None = None
    service: constr(strip_whitespace=True, max_length=80) | None = None
    howSoon: constr(strip_whitespace=True, max_length=80) | None = None
    message: constr(strip_whitespace=True, max_length=2000) | None = None
    source: constr(strip_whitespace=True, max_length=60) | None = None


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
def create_lead(lead: LeadIn, request: Request):
    now = datetime.now(timezone.utc).isoformat()
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
