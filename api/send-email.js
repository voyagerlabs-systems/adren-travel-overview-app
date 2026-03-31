import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, reason, message, phone } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Configure the Titan Email SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PASSWORD,
    },
  });

  // Send to both founders
  const founders = process.env.FOUNDERS_EMAILS ? process.env.FOUNDERS_EMAILS.split(",") : [
    "ankit.prasad@adrentravel.com",
  ];

  try {

    const info = await transporter.sendMail({
      from: process.env.GODADDY_EMAIL,
      to: founders.join(", "),
      replyTo: email,
      subject: `Contact Form: ${reason || "General Inquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Company: ${company || "N/A"}`,
        `Reason: ${reason || "N/A"}`,
        `Message:\n${message}`,
      ].join("\n"),
      html: `
 <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7); padding: 32px 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0 0 8px; letter-spacing: -0.5px;">ADREN</h1>
            <p style="color: rgba(255,255,255,0.85); font-size: 13px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">New Contact Inquiry</p>
          </div>

          <!-- Badge -->
          <div style="text-align: center; margin-top: -16px;">
            <span style="display: inline-block; background: #f0fdf4; color: #16a34a; font-size: 12px; font-weight: 700; padding: 6px 16px; border-radius: 20px; border: 1px solid #bbf7d0;">
              ${reason === "demo" ? "Demo Request" : reason === "sales" ? "Sales Inquiry" : reason === "support" ? "Technical Support" : reason === "partnership" ? "Partnership" : "General Inquiry"}
            </span>
          </div>

          <!-- Body -->
          <div style="padding: 28px 32px;">
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
              You've received a new inquiry from the ADREN website contact form. Here are the details:
            </p>

            <!-- Contact Details Card -->
            <div style="background: #f9fafb; border-radius: 12px; padding: 20px 24px; border: 1px solid #f3f4f6;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                    <span style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Full Name</span><br/>
                    <span style="color: #111827; font-size: 15px; font-weight: 600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                    <span style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email Address</span><br/>
                    <a href="mailto:${email}" style="color: #6366f1; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                    <span style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Phone</span><br/>
                    <a href="tel:${phone}" style="color: #6366f1; font-size: 15px; font-weight: 600; text-decoration: none;">${phone || "Not provided"}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                    <span style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Company</span><br/>
                    <span style="color: #111827; font-size: 15px; font-weight: 600;">${company || "Not provided"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; vertical-align: top;">
                    <span style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Reason</span><br/>
                    <span style="color: #111827; font-size: 15px; font-weight: 600;">${reason === "demo" ? "Request a Demo" : reason === "sales" ? "Sales Inquiry" : reason === "support" ? "Technical Support" : reason === "partnership" ? "Partnership Opportunity" : reason || "Not specified"}</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="margin-top: 24px;">
              <p style="color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin: 0 0 8px;">Message</p>
              <div style="background: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #6366f1; border-radius: 8px; padding: 16px 20px;">
                <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- CTA -->
            <div style="text-align: center; margin-top: 28px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 32px; border-radius: 10px; text-decoration: none;">
                Reply to ${name.split(" ")[0]}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This email was sent from the <strong>ADREN</strong> website contact form.<br/>
              &copy; ${new Date().getFullYear()} Adren Travel. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.warn("[Success] Message ID:", info.messageId);

    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
