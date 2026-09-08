const crypto = require("crypto");
const { createSession, sessionCookie } = require("../_lib/auth");
const { redis } = require("../_lib/redis");

function readBody(request) {
  if (!request.body) return {};
  return typeof request.body === "string" ? JSON.parse(request.body) : request.body;
}

module.exports = async function login(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });

  try {
    const { password = "" } = readBody(request);
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) return response.status(503).json({ error: "Admin authentication is not configured." });

    const address = String(request.headers["x-forwarded-for"] || request.socket?.remoteAddress || "unknown").split(",")[0].trim();
    const addressKey = crypto.createHash("sha256").update(address).digest("hex");
    const attempts = await redis("INCR", [`admin:login-attempts:${addressKey}`]);
    if (attempts === 1) await redis("EXPIRE", [`admin:login-attempts:${addressKey}`, "900"]);
    if (attempts > 10) return response.status(429).json({ error: "Too many login attempts. Try again later." });

    const providedBuffer = Buffer.from(String(password));
    const expectedBuffer = Buffer.from(expected);
    const valid = providedBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(providedBuffer, expectedBuffer);
    if (!valid) return response.status(401).json({ error: "Incorrect password" });

    await redis("DEL", [`admin:login-attempts:${addressKey}`]);
    response.setHeader("Set-Cookie", sessionCookie(createSession()));
    return response.status(200).json({ authenticated: true });
  } catch {
    return response.status(400).json({ error: "Invalid login request" });
  }
};
