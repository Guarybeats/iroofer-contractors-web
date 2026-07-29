import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_USER = process.env.SMTP_USER || "iroofercontractors@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || "";
const LEAD_TO = process.env.LEAD_TO || "iroofercontractors@gmail.com";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://iroofer-lead-api-556154145006.us-central1.run.app";

export async function POST(request) {
  try {
    const payload = await request.json();

    if (payload._honeypot || payload.website) {
      return Response.json({ status: "received" }, { status: 201 });
    }

    const now = new Date().toISOString();

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    let estimateBlock = [];
    if (payload.estimateInfo) {
      try {
        const est = JSON.parse(payload.estimateInfo);
        estimateBlock = [
          "",
          "═══════════════════════════════════════",
          "         ESTIMATE DETAILS",
          "═══════════════════════════════════════",
          "",
          `  Roof Size:     ${est.size}`,
          `  Material:      ${est.material}`,
          `  Pitch:         ${est.pitch}`,
          `  Stories:       ${est.stories}`,
          `  Add-ons:       ${est.extras}`,
          `  Est. Range:    ${est.range}`,
          `  Breakdown:     ${est.breakdown}`,
          "",
          "═══════════════════════════════════════",
        ];
      } catch {
        estimateBlock = ["", "--- ESTIMATE ---", payload.estimateInfo];
      }
    }

    const emailBody = [
      "╔══════════════════════════════════════╗",
      "║       NEW LEAD — iRoofer            ║",
      "╚══════════════════════════════════════╝",
      "",
      `  Date:     ${now}`,
      `  Source:   ${payload.source || "website"}`,
      "",
      "── CONTACT INFO ───────────────────────",
      "",
      `  Name:     ${payload.fullName || ""}`,
      `  Phone:    ${payload.phone || ""}`,
      `  Email:    ${payload.email || "(not provided)"}`,
      "",
      "── PROJECT INFO ───────────────────────",
      "",
      `  Address:  ${payload.address || "(not provided)"}`,
      `  Service:  ${payload.service || "(not specified)"}`,
      `  Timing:   ${payload.howSoon || "(not specified)"}`,
      "",
      ...estimateBlock,
      "",
      "── MESSAGE ────────────────────────────",
      "",
      `  ${(payload.message || "(none)").split("\n").join("\n  ")}`,
      "",
      "────────────────────────────────────────",
    ].join("\n");

    await transporter.sendMail({
      from: SMTP_USER,
      to: LEAD_TO,
      subject: `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`,
      text: emailBody,
    });

    fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    return Response.json({ status: "received" }, { status: 201 });
  } catch (err) {
    console.error("Lead API error:", err);
    return Response.json(
      { error: "Something went wrong sending your request." },
      { status: 500 }
    );
  }
}
