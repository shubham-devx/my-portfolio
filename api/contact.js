const OWNER_EMAIL = process.env.CONTACT_EMAIL || "subhamv2003@gmail.com";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || OWNER_EMAIL;

function readBody(request) {
  if (!request.body) return {};
  return typeof request.body === "string" ? JSON.parse(request.body) : request.body;
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

async function sendBrevoEmail({ to, subject, htmlContent, replyTo }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { email: SENDER_EMAIL, name: "Portfolio Contact" },
      to: [{ email: to }],
      replyTo: replyTo ? { email: replyTo } : undefined,
      subject,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo request failed: ${response.status} ${errorText.slice(0, 240)}`);
  }
}

module.exports = async function contact(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  if (!process.env.BREVO_API_KEY) return response.status(503).json({ error: "Contact email service is not configured." });

  try {
    const body = readBody(request);
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const message = clean(body.message, 5000);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response.status(400).json({ error: "Please provide a valid name, email and message." });
    }

    const safeName = name.replace(/[<>]/g, "");
    const safeEmail = email.replace(/[<>]/g, "");
    const safeMessage = message.replace(/[<>]/g, "").replace(/\n/g, "<br />");

    await sendBrevoEmail({
      to: OWNER_EMAIL,
      replyTo: safeEmail,
      subject: `New portfolio message from ${safeName}`,
      htmlContent: `<h2>New portfolio contact</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    });

    await sendBrevoEmail({
      to: safeEmail,
      subject: "Thanks for contacting me",
      htmlContent: `<p>Hi ${safeName},</p><p>Thanks for contacting me. I received your message and will get back to you as soon as possible.</p><p>Best,<br />Shubham Verma</p>`,
    });

    return response.status(200).json({ sent: true });
  } catch (error) {
    console.error("Contact email error:", error.message);
    return response.status(502).json({ error: "The message could not be sent right now. Please try again later." });
  }
};
