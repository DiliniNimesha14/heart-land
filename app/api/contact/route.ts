import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const FROM_EMAIL = process.env.SES_FROM_EMAIL;
const TO_EMAIL = process.env.SES_TO_EMAIL;

const hasExplicitCreds =
  !!process.env.AWS_ACCESS_KEY_ID && !!process.env.AWS_SECRET_ACCESS_KEY;

const ses = new SESClient({
  region: process.env.AWS_REGION,
  ...(hasExplicitCreds && {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  }),
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  if (!FROM_EMAIL || !TO_EMAIL) {
    console.error("SES is not configured. Check environment variables.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const inquiryType = String(body.inquiryType ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!fullName || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const emailSubject = `[Contact] ${inquiryType}${subject ? ` — ${subject}` : ""}`;

  const inquiryLabels: Record<string, string> = {
    retailers: "Retailers",
    products: "Product Inquiry",
    general: "General Inquiry",
  };
  const inquiryLabel = inquiryLabels[inquiryType] ?? inquiryType;

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const textBody = [
    "New contact form submission — Heartland General Trading",
    "",
    `Name:         ${fullName}`,
    `Email:        ${email}`,
    `Inquiry type: ${inquiryLabel}`,
    `Subject:      ${subject || "(none)"}`,
    `Submitted:    ${submittedAt} (Dubai time)`,
    "",
    "Message:",
    "-------------------------------------------",
    message,
    "-------------------------------------------",
    "",
    `Reply directly to this email to respond to ${fullName}.`,
  ].join("\n");

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;color:#888888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:15px;">${value}</td>
    </tr>`;

  const htmlBody = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color:#D11417;padding:24px 28px;">
                <div style="color:#ffffff;font-size:20px;font-weight:700;">Heartland General Trading</div>
                <div style="color:#ffd6d6;font-size:14px;margin-top:4px;">New contact form submission</div>
              </td>
            </tr>
            <!-- Details -->
            <tr>
              <td style="padding:24px 12px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", escapeHtml(fullName))}
                  ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#D11417;text-decoration:none;">${escapeHtml(email)}</a>`)}
                  ${row("Inquiry type", escapeHtml(inquiryLabel))}
                  ${row("Subject", escapeHtml(subject) || "<span style='color:#aaaaaa;'>(none)</span>")}
                  ${row("Submitted", `${escapeHtml(submittedAt)} <span style="color:#aaaaaa;">(Dubai time)</span>`)}
                </table>
              </td>
            </tr>
            <!-- Message -->
            <tr>
              <td style="padding:8px 28px 24px;">
                <div style="color:#888888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;">Message</div>
                <div style="background-color:#fbf2f2;border-left:4px solid #D11417;border-radius:0 6px 6px 0;padding:16px 18px;color:#1a1a1a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color:#fafafa;padding:16px 28px;border-top:1px solid #f0f0f0;">
                <div style="color:#777777;font-size:13px;line-height:1.5;">
                  Reply directly to this email to respond to <strong>${escapeHtml(fullName)}</strong>.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: { ToAddresses: [TO_EMAIL] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: emailSubject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
            Html: { Data: htmlBody, Charset: "UTF-8" },
          },
        },
      }),
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("SES send failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    );
  }
}
