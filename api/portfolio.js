const { isAuthenticated } = require("./_lib/auth");
const { redis } = require("./_lib/redis");

function readBody(request) {
  if (!request.body) return {};
  return typeof request.body === "string" ? JSON.parse(request.body) : request.body;
}

module.exports = async function portfolio(request, response) {
  response.setHeader("Cache-Control", "no-store, max-age=0");

  if (request.method === "GET") {
    try {
      const value = await redis("GET", ["portfolio:data"]);
      return response.status(200).json({ portfolio: value ? JSON.parse(value) : null });
    } catch (error) {
      return response.status(503).json({ error: error.message });
    }
  }

  if (request.method !== "PUT") return response.status(405).json({ error: "Method not allowed" });
  if (!isAuthenticated(request)) return response.status(401).json({ error: "Unauthorized" });

  try {
    const { portfolio } = readBody(request);
    if (!portfolio || typeof portfolio !== "object" || Array.isArray(portfolio)) {
      return response.status(400).json({ error: "A valid portfolio object is required." });
    }

    await redis("SET", ["portfolio:data", JSON.stringify(portfolio)]);
    return response.status(200).json({ saved: true });
  } catch (error) {
    return response.status(503).json({ error: error.message || "Portfolio storage is unavailable." });
  }
};