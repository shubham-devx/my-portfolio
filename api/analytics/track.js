const { redis } = require("../_lib/redis");

const allowedEvents = new Set(["visit", "project_view", "resume_download"]);

function clean(value, fallback) {
  return String(value || fallback).replace(/[^a-zA-Z0-9_./:@ -]/g, "").slice(0, 120) || fallback;
}

module.exports = async function track(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : (request.body || {});
    const event = clean(body.event, "");
    if (!allowedEvents.has(event)) return response.status(400).json({ error: "Unsupported analytics event" });

    if (event === "visit") {
      const source = clean(body.source, "direct");
      await redis("HINCRBY", ["analytics:totals", "visits", "1"]);
      await redis("HINCRBY", ["analytics:sources", source, "1"]);
    }

    if (event === "project_view") {
      await redis("HINCRBY", ["analytics:projects", clean(body.project, "unknown"), "1"]);
    }

    if (event === "resume_download") {
      await redis("HINCRBY", ["analytics:resumes", clean(body.resume, "unknown"), "1"]);
    }

    return response.status(204).end();
  } catch (error) {
    return response.status(503).json({ error: error.message });
  }
};
