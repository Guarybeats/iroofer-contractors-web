// Cloudflare Pages Function — receives lead form POSTs at /api/leads
// and emails them to iroofercontractors@gmail.com as a NEW LEAD.
//
// HISTORY: this previously used nodemailer + Gmail SMTP. SMTP needs a raw TCP
// socket, which the Workers runtime does not provide, so sendMail() HUNG
// FOREVER in production instead of throwing — the catch block never ran and
// the request never returned. Leads were lost silently.
//
// Now: email is sent over plain HTTPS (Resend), every outbound call is bounded
// by a timeout, and the handler ALWAYS returns quickly. If email is not
// configured or fails, the lead is still persisted (KV, when bound) and logged,
// so a lead is never silently dropped.
//
// OPTIONAL environment variables (Cloudflare Pages > Settings > Variables):
//   RESEND_API_KEY           — enables email delivery
//   LEAD_FROM                — verified sender, e.g. "iRoofer Leads <leads@iroofercontractors.com>"
//   LEAD_TO                  — override recipient (defaults below)
//   TURNSTILE_SECRET_KEY     — Cloudflare Turnstile secret (server verify)
//   TURNSTILE_OPTIONAL       — set "1" to allow missing Turnstile in production (not recommended)
// OPTIONAL KV binding:
//   LEADS                    — KV namespace; every lead is written here as a backup
//
// Build-time (Next.js / Pages build env — public):
//   NEXT_PUBLIC_TURNSTILE_SITE_KEY — Turnstile site key for the widget

const DEFAULT_LEAD_TO = "iroofercontractors@gmail.com";
const DEFAULT_LEAD_FROM = "iRoofer Leads <onboarding@resend.dev>";
const SEND_TIMEOUT_MS = 8000;
const TURNSTILE_TIMEOUT_MS = 5000;

// Backstop delivery: the private iRoofer Ops Space stores every lead and emails
// the office inbox through its own (already configured) mail sender. This runs
// whenever Resend is not configured or fails, so a lead always reaches Cristian
// even with zero Cloudflare-side email setup.
const INTAKE_URL = "https://accurate-ibis-174.convex.site/lead";
const INTAKE_KEY = "iroofer-web-lead-2f7a9c14be5d4803";

const SERVICE_ZIP_PREFIXES = ["300", "301", "302", "303"];
const SPAM_EMAIL_DOMAINS = ["virtualhelpdesk.pro"];
const BLOCKED_PHONES = new Set(["3072076448"]);

const OUT_OF_AREA_MSG =
  "We currently serve north Georgia and the Atlanta metro (Dallas, Paulding, Cobb, Douglas, and nearby). If you're just outside that area, call us at (470) 236-1410 — otherwise please check your ZIP.";

function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeZip(value) {
  const raw = String(value || "").trim();
  const m = raw.match(/^(\d{5})(?:-\d{4})?$/);
  return m ? m[1] : "";
}

function isValidUsZip(value) {
  return /^\d{5}(-\d{4})?$/.test(String(value || "").trim());
}

function isInServiceArea(value) {
  const zip5 = normalizeZip(value);
  if (!zip5) return false;
  return SERVICE_ZIP_PREFIXES.some((p) => zip5.startsWith(p));
}

function isFake555Phone(phone) {
  const d = digitsOnly(phone);
  const national = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  if (national.length !== 10) return false;
  return national.slice(3, 6) === "555";
}

function isBlockedPhone(phone) {
  const d = digitsOnly(phone);
  const national = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  return BLOCKED_PHONES.has(national);
}

function hasTemplateTokens(...fields) {
  return fields.some((f) => typeof f === "string" && /\{\{[^}]+\}\}/.test(f));
}

function isPhoneOnlyMessage(message) {
  const trimmed = String(message || "").trim();
  if (!trimmed) return false;
  const digits = digitsOnly(trimmed);
  if (digits.length < 7 || digits.length > 15) return false;
  const leftover = trimmed.replace(/[\d\s\-().+/]/g, "");
  return leftover.length === 0;
}

function isSpamEmailDomain(email) {
  const e = String(email || "").trim().toLowerCase();
  if (!e || !e.includes("@")) return false;
  const domain = e.split("@").pop();
  return SPAM_EMAIL_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`));
}

function reject(error, status = 400, field) {
  const body = { error };
  if (field) body.field = field;
  return Response.json(body, { status });
}

function formatLead(p) {
  const line = (k, v) => `  ${k.padEnd(12)} ${v || "(not provided)"}`;
  const est = p.estimateInfo ? `\n\n── ESTIMATE ──────────────────────\n  ${p.estimateInfo}` : "";
  const location = [p.city, p.zip].filter(Boolean).join(", ");
  return [
    "NEW LEAD — iRoofer Contractors",
    "",
    `  Date:     ${new Date().toISOString()}`,
    `  Source:   ${p.source || "website"}`,
    "",
    "── CONTACT INFO ───────────────────────",
    line("Name", p.fullName),
    line("Phone", p.phone),
    line("Email", p.email),
    "",
    "── PROJECT INFO ───────────────────────",
    line("Address", p.address),
    line("City", p.city),
    line("ZIP", p.zip),
    line("Location", location),
    line("Service", p.service),
    line("Timing", p.howSoon),
    "",
    "── MESSAGE ────────────────────────────",
    `  ${(p.message || "(none)").split("\n").join("\n  ")}`,
    est,
    "",
    "────────────────────────────────────────",
  ].join("\n");
}

// Backup copy of the lead. Runs before delivery is attempted so that a
// delivery failure can never cost us the lead itself.
async function persistLead(env, payload, text) {
  if (!env.LEADS || typeof env.LEADS.put !== "function") return false;
  try {
    const key = `lead:${new Date().toISOString()}:${crypto.randomUUID()}`;
    await env.LEADS.put(key, JSON.stringify({ received: new Date().toISOString(), payload, text }));
    return true;
  } catch (err) {
    console.error("[LEAD] KV persist failed:", err && err.message);
    return false;
  }
}

async function sendViaResend(env, { subject, text, replyTo }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.LEAD_FROM || DEFAULT_LEAD_FROM,
        to: [env.LEAD_TO || DEFAULT_LEAD_TO],
        reply_to: replyTo || undefined,
        subject,
        text,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error("[LEAD] Resend rejected:", res.status, (await res.text()).slice(0, 300));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[LEAD] Resend send failed:", err && err.name, err && err.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

async function forwardToOpsIntake(env, { subject, text, payload, replyTo }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
  try {
    const res = await fetch(env.LEAD_INTAKE_URL || INTAKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-intake-key": env.LEAD_INTAKE_KEY || INTAKE_KEY,
      },
      body: JSON.stringify({ subject, text, payload, replyTo }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error("[LEAD] intake rejected:", res.status, (await res.text()).slice(0, 300));
      return false;
    }
    const body = await res.json().catch(() => ({}));
    return body.emailed === true;
  } catch (err) {
    console.error("[LEAD] intake forward failed:", err && err.name, err && err.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

async function verifyTurnstile(env, token, ip) {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: false, reason: "missing_secret" };
  if (!token) return { ok: false, reason: "missing_token" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TURNSTILE_TIMEOUT_MS);
  try {
    const form = new URLSearchParams();
    form.set("secret", secret);
    form.set("response", token);
    if (ip) form.set("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      signal: controller.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!data.success) {
      console.warn("[LEAD] Turnstile failed:", data["error-codes"] || data);
      return { ok: false, reason: "invalid_token" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[LEAD] Turnstile verify error:", err && err.name, err && err.message);
    return { ok: false, reason: "verify_error" };
  } finally {
    clearTimeout(timer);
  }
}

function isProduction(env) {
  // Cloudflare Pages sets CF_PAGES=1 on both preview and production deploys.
  return env.CF_PAGES === "1" || env.ENVIRONMENT === "production";
}

/**
 * Spam / validation gate. Returns a Response to short-circuit, or null to continue.
 * Clear spam gets a hard 4xx and never emails the owner.
 */
function validateLeadPayload(payload) {
  const fullName = (payload.fullName || "").toString().trim();
  const phone = (payload.phone || "").toString().trim();
  const email = (payload.email || "").toString().trim();
  const address = (payload.address || "").toString().trim();
  const city = (payload.city || "").toString().trim();
  const zip = (payload.zip || "").toString().trim();
  const message = (payload.message || "").toString().trim();
  const source = (payload.source || "").toString();

  if (!fullName) return reject("Please enter your name", 400, "fullName");
  if (!phone) return reject("Please enter your phone number", 400, "phone");

  if (isFake555Phone(phone) || isBlockedPhone(phone)) {
    console.warn("[LEAD][SPAM] blocked phone", phone);
    return reject("Please enter a real phone number", 400, "phone");
  }

  if (hasTemplateTokens(fullName, phone, email, address, city, zip, message, source)) {
    console.warn("[LEAD][SPAM] template tokens");
    return reject("Please check your information and try again.", 400);
  }

  if (isSpamEmailDomain(email)) {
    console.warn("[LEAD][SPAM] email domain", email);
    return reject("Please use a personal email address.", 400, "email");
  }

  if (isPhoneOnlyMessage(message)) {
    console.warn("[LEAD][SPAM] phone-only message");
    return reject(
      "Please tell us a bit about the roof issue (not just a phone number).",
      400,
      "message"
    );
  }

  // ZIP required on all lead forms (hero + full quote).
  if (!zip) return reject("Please enter your ZIP code", 400, "zip");
  if (!isValidUsZip(zip)) {
    return reject("Please enter a valid 5-digit US ZIP code.", 400, "zip");
  }
  if (!isInServiceArea(zip)) {
    console.warn("[LEAD][OUT_OF_AREA] zip=", zip);
    return reject(OUT_OF_AREA_MSG, 400, "zip");
  }

  // Full quote forms send address + city; hero only sends ZIP.
  // If address is present, require it to be usable; if city present, require non-empty.
  const isHero = source === "hero" || (!address && !city);
  if (!isHero) {
    if (!address || address.length < 5) {
      return reject("Please enter your property street address", 400, "address");
    }
    if (!city) {
      return reject("Please enter your city", 400, "city");
    }
  }

  // Known registered-agent street spam (Sheridan WY pattern).
  if (/gould\s*st/i.test(address) && /^307/.test(digitsOnly(phone))) {
    console.warn("[LEAD][SPAM] gould+307 pattern");
    return reject("Unable to process this request.", 400);
  }

  return null;
}

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return reject("Invalid request body", 400);
  }

  // Honeypot: silent accept, no email.
  if (payload._honeypot || payload.website) {
    return Response.json({ status: "received" }, { status: 201 });
  }

  // Cloudflare Turnstile — enforce when secret is set; fail closed in production if missing.
  const optional = env.TURNSTILE_OPTIONAL === "1";
  if (!env.TURNSTILE_SECRET_KEY) {
    if (isProduction(env) && !optional) {
      console.error("[LEAD] TURNSTILE_SECRET_KEY missing in production — fail closed");
      return reject(
        "Lead form temporarily unavailable. Please call us at (470) 236-1410.",
        503
      );
    }
    console.warn("[LEAD] TURNSTILE_SECRET_KEY not set — skipping Turnstile verify");
  } else {
    const ip =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
      "";
    const result = await verifyTurnstile(env, payload.turnstileToken, ip);
    if (!result.ok) {
      return reject("Please complete the security check and try again.", 403);
    }
  }

  const validationError = validateLeadPayload(payload);
  if (validationError) return validationError;

  // Normalize for storage / email.
  payload.fullName = (payload.fullName || "").toString().trim();
  payload.phone = (payload.phone || "").toString().trim();
  payload.zip = normalizeZip(payload.zip);
  if (payload.city) payload.city = payload.city.toString().trim();
  if (payload.address) payload.address = payload.address.toString().trim();

  const text = formatLead(payload);
  const subject = `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`;

  // 1. Never lose the lead, whatever happens next.
  const persisted = await persistLead(env, payload, text);

  // 2. Attempt delivery only if configured. Never block the response on it.
  let delivered = false;
  if (env.RESEND_API_KEY) {
    delivered = await sendViaResend(env, { subject, text, replyTo: payload.email });
  } else {
    console.log("[LEAD] RESEND_API_KEY not set — email not attempted.");
  }

  // 3. Backstop: Ops Space intake stores the lead and emails the office inbox.
  if (!delivered) {
    delivered = await forwardToOpsIntake(env, {
      subject,
      text,
      payload,
      replyTo: payload.email,
    });
  }

  if (!delivered) {
    // Loud, greppable log so a lead is recoverable from Pages logs.
    console.error(`[LEAD][UNDELIVERED] persisted=${persisted}\n${text}`);
  }

  // The visitor always sees success; their submission is recorded either way.
  return Response.json({ status: "received" }, { status: 201 });
}
