// Cloudflare Pages Function — receives lead form POSTs at /api/leads
// and emails them to iroofercontractors@gmail.com as a NEW LEAD.
// Deploys as a serverless Function even on a static `output: "export"` build.
//
// REQUIRED secrets (Cloudflare Pages dashboard > Settings > Environment variables,
// or `wrangler secret put`):
//   GMAIL_USER         = iroofercontractors@gmail.com
//   GMAIL_APP_PASSWORD = 16-char Gmail app password (NOT the normal login password)
//
// Delivery uses Gmail SMTP over a TLS socket (Cloudflare Sockets API) — no extra
// email service or verified sending domain required. If SMTP creds are missing or
// send fails, the lead is still logged to the Workers log so nothing is lost, and
// the form still shows success to the visitor.

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

// Minimal SMTP client over Cloudflare's Sockets API (no dependencies).
async function sendSmtp({ host, port, user, pass, from, to, subject, text }) {
  const socket = connect(host, port);
  const enc = new TextEncoder();
  const buf = new Uint8Array(4096);
  let leftover = "";
  let recvResolve = null;
  let recvReject = null;

  const recv = () =>
    new Promise((resolve, reject) => {
      recvResolve = resolve;
      recvReject = reject;
    });

  socket.onopen = () => {};
  socket.onmessage = (event) => {
    const chunk = typeof event.data === "string" ? event.data : new TextDecoder().decode(event.data);
    leftover += chunk;
    if (recvResolve) {
      const r = recvResolve;
      recvResolve = null;
      r(leftover);
    }
  };
  socket.onerror = (e) => {
    if (recvReject) recvReject(new Error(e.message || "socket error"));
  };

  const read = async () => (await recv());
  const send = (s) => socket.send(enc.encode(s));

  const code = (s) => parseInt((s || "").trim().slice(0, 3), 10);
  const cmd = async (c, want) => {
    await send(c + "\r\n");
    const r = await read();
    if (want && code(r) !== want) throw new Error(`SMTP ${c} -> ${r.trim()}`);
    return r;
  };

  await cmd("EHLO iroofer", 250);
  await cmd("AUTH LOGIN", 334);
  await cmd(btoa(user), 334);
  await cmd(btoa(pass), 235);
  await cmd(`MAIL FROM:<${from}>`, 250);
  await cmd(`RCPT TO:<${to}>`, 250);
  await cmd("DATA", 354);
  const msg =
    `From: ${from}\r\n` +
    `To: ${to}\r\n` +
    `Subject: ${subject}\r\n` +
    `Content-Type: text/plain; charset=utf-8\r\n` +
    `\r\n` +
    `${text}\r\n`;
  await send(msg + "\r\n.\r\n");
  const r = await read();
  if (code(r) !== 250) throw new Error(`SMTP DATA -> ${r.trim()}`);
  await cmd("QUIT", 221);
  socket.close();
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
    console.log("[LEAD] SMTP creds not set. Lead received:\n" + text);
    return Response.json({ status: "received" }, { status: 201 });
  }

  try {
    await sendSmtp({
      host: "smtp.gmail.com",
      port: 465,
      user,
      pass,
      from: user,
      to: LEAD_TO,
      subject,
      text,
    });
    return Response.json({ status: "received" }, { status: 201 });
  } catch (err) {
    console.error("[LEAD] SMTP send failed:", err.message, "\n" + text);
    // Still succeed for the visitor; the lead is preserved in the Workers log.
    return Response.json({ status: "received" }, { status: 201 });
  }
}
