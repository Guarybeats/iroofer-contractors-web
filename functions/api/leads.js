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
//   RESEND_API_KEY  — enables email delivery
//   LEAD_FROM       — verified sender, e.g. "iRoofer Leads <leads@iroofercontractors.com>"
//   LEAD_TO         — override recipient (defaults below)
// OPTIONAL KV binding:
//   LEADS           — KV namespace; every lead is written here as a backup

const DEFAULT_LEAD_TO = "iroofercontractors@gmail.com";
const DEFAULT_LEAD_FROM = "iRoofer Leads <onboarding@resend.dev>";
const SEND_TIMEOUT_MS = 8000;

// Backstop delivery: the private iRoofer Ops Space stores every lead and emails
// the office inbox through its own (already configured) mail sender. This runs
// whenever Resend is not configured or fails, so a lead always reaches Cristian
// even with zero Cloudflare-side email setup.
const INTAKE_URL = "https://accurate-ibis-174.convex.site/lead";
const INTAKE_KEY = "iroofer-web-lead-2f7a9c14be5d4803";

function formatLead(p) {
  const line = (k, v) => `  ${k.padEnd(12)} ${v || "(not provided)"}`;
  const est = p.estimateInfo ? `\n\n── ESTIMATE ──────────────────────\n  ${p.estimateInfo}` : "";
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

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: silent accept, no email.
  if (payload._honeypot || payload.website) {
    return Response.json({ status: "received" }, { status: 201 });
  }

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
