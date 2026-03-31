import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, reason, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Configure the Titan Email SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
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
    // Debug: log config (remove in production)
    console.log("SMTP user:", process.env.GODADDY_EMAIL ? "SET" : "MISSING");
    console.log("SMTP pass:", process.env.GODADDY_PASSWORD ? "SET" : "MISSING");

    const info = await transporter.sendMail({
      from: process.env.GODADDY_EMAIL,
      to: founders.join(", "),
      replyTo: email,
      subject: `Contact Form: ${reason || "General Inquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "N/A"}`,
        `Reason: ${reason || "N/A"}`,
        `Message:\n${message}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111418;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td style="padding: 8px 0;">${company || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Reason</td><td style="padding: 8px 0;">${reason || "N/A"}</td></tr>
          </table>
          <h3 style="margin-top: 24px; color: #111418;">Message</h3>
          <p style="background: #f9fafb; padding: 16px; border-radius: 8px; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    console.log("Email sent! Response:", info.response);
    console.log("Message ID:", info.messageId);

    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
