// Cloudflare Pages Function — receives lead form POSTs at /api/leads
// and emails them to iroofercontractors@gmail.com as a NEW LEAD.
// Uses nodemailer + Gmail SMTP (the same approach that worked on the
// original Node deployment). Requires nodejs_compat (see wrangler.toml).
//
// REQUIRED secrets (Cloudflare Pages > Settings > Environment variables):
//   GMAIL_USER         = iroofercontractors@gmail.com
//   GMAIL_APP_PASSWORD = 16-char Gmail app password
//
// If creds are missing or send fails, the lead is logged (not lost) and the
// form still shows success to the visitor.

import nodemailer from "nodemailer";

const LEAD_TO = "iroofercontractors@gmail.com";

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

  const user = env.GMAIL_USER || LEAD_TO;
  const pass = env.GMAIL_APP_PASSWORD;
  const subject = `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`;
  const text = formatLead(payload);

  if (!pass) {
    console.log("[LEAD] Gmail creds not set. Lead received:\n" + text);
    return Response.json({ status: "received" }, { status: 201 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `"iRoofer Leads" <${user}>`,
      to: LEAD_TO,
      replyTo: payload.email || user,
      subject,
      text,
    });
    return Response.json({ status: "received" }, { status: 201 });
  } catch (err) {
    console.error("[LEAD] Gmail send failed:", err.message, "\n" + text);
    return Response.json({ status: "received" }, { status: 201 });
  }
}
