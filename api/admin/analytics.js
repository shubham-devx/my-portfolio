const { isAuthenticated } = require("../_lib/auth");
const { redis, parseHash } = require("../_lib/redis");

module.exports = async function analytics(request, response) {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  if (!isAuthenticated(request)) return response.status(401).json({ error: "Unauthorized" });

  try {
    const [totals, projects, resumes, sources] = await Promise.all([
      redis("HGETALL", ["analytics:totals"]),
      redis("HGETALL", ["analytics:projects"]),
      redis("HGETALL", ["analytics:resumes"]),
      redis("HGETALL", ["analytics:sources"]),
    ]);
    return response.status(200).json({ totals: parseHash(totals), projects: parseHash(projects), resumes: parseHash(resumes), sources: parseHash(sources) });
  } catch (error) {
    return response.status(503).json({ error: error.message });
  }
};
