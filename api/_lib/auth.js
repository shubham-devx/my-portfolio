const crypto = require("crypto");

const SESSION_MAX_AGE = 60 * 60;

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function sign(value) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("Admin session secret is not configured.");
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function createSession() {
  const payload = base64url(JSON.stringify({ sub: "admin", exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE }));
  return `${payload}.${sign(payload)}`;
}

function parseCookies(header = "") {
  return header.split(";").reduce((cookies, part) => {
    const separator = part.indexOf("=");
    if (separator > 0) cookies[part.slice(0, separator).trim()] = decodeURIComponent(part.slice(separator + 1).trim());
    return cookies;
  }, {});
}

function isAuthenticated(request) {
  const token = parseCookies(request.headers.cookie).admin_session;
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expectedSignature = Buffer.from(sign(payload));
  const providedSignature = Buffer.from(signature);
  if (providedSignature.length !== expectedSignature.length || !crypto.timingSafeEqual(providedSignature, expectedSignature)) return false;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return session.sub === "admin" && session.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

function sessionCookie(token) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `admin_session=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${SESSION_MAX_AGE}; SameSite=Lax${secure}`;
}

module.exports = { createSession, isAuthenticated, sessionCookie };
