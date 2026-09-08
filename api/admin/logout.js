const { sessionCookie } = require("../_lib/auth");

module.exports = function logout(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  response.setHeader("Set-Cookie", `${sessionCookie("")}; Max-Age=0`);
  return response.status(200).json({ authenticated: false });
};
