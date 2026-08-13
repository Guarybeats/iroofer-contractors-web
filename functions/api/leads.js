// Cloudflare Pages Function — receives lead form POSTs at /api/leads
// and emails them to iroofercontractors@gmail.com as a NEW LEAD.
// Deploys as a serverless Function even on a static `output: "export"` build.
//
// Delivery: Resend (HTTP API — reliable on Cloudflare Workers, no socket code).
// The lead is emailed FROM a verified domain address TO iroofercontractors@gmail.com.
//
// REQUIRED secret (Cloudflare Pages > Settings > Environment variables, or
// `wrangler secret put`):
//   RESEND_API_KEY  = re_xxx (from resend.com; free tier = 3k emails/mo)
//
// OPTIONAL env (defaults shown):
//   LEAD_FROM  = leads@iroofercontractors.com   (must be a domain you verified in Resend)
//   LEAD_TO    = iroofercontractors@gmail.com    (the inbox that receives leads)
//
// If RESEND_API_KEY is missing, the lead is logged (not lost) and the form still
// shows success to the visitor.

const LEAD_TO = "iroofercontractors@gmail.com";
const LEAD_FROM = "leads@iroofercontractors.com";

function formatLead(p) {
  const line = (k, v) => `  ${k.padEnd(12)} ${v || "(not provided)"}`;
  const est = p.estimateInfo ? `\n\n── ESTIMATE ──────────────────────\n  ${p.estimateInfo}` : "";
  return [
    "╔══════════════════════════════════════╗",
    "║          NEW LEAD — iRoofer          ║",
    "╚══════════════════════════════════════╝",
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

  const to = env.LEAD_TO || LEAD_TO;
  const from = env.LEAD_FROM || LEAD_FROM;
  const apiKey = env.RESEND_API_KEY;
  const subject = `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`;
  const text = formatLead(payload);

  if (!apiKey) {
    console.log("[LEAD] RESEND_API_KEY not set. Lead received:\n" + text);
    return Response.json({ status: "received" }, { status: 201 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: payload.email || undefined,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Resend ${res.status}: ${body}`);
    }
    return Response.json({ status: "received" }, { status: 201 });
  } catch (err) {
    console.error("[LEAD] email send failed:", err.message, "\n" + text);
    // Still succeed for the visitor; the lead is preserved in the Workers log.
    return Response.json({ status: "received" }, { status: 201 });
  }
}
