const emptyAnalytics = { totals: {}, projects: {}, resumes: {}, sources: {} };

export function getLocalAnalytics() {
  try {
    return { ...emptyAnalytics, ...JSON.parse(window.localStorage.getItem("portfolio-analytics")) };
  } catch {
    return emptyAnalytics;
  }
}

export function trackAnalytics(event, details = {}) {
  if (process.env.NODE_ENV === "development") {
    const analytics = getLocalAnalytics();
    if (event === "visit") {
      analytics.totals.visits = (analytics.totals.visits || 0) + 1;
      const source = details.source || "direct";
      analytics.sources[source] = (analytics.sources[source] || 0) + 1;
    }
    if (event === "project_view") analytics.projects[details.project] = (analytics.projects[details.project] || 0) + 1;
    if (event === "resume_download") analytics.resumes[details.resume] = (analytics.resumes[details.resume] || 0) + 1;
    window.localStorage.setItem("portfolio-analytics", JSON.stringify(analytics));
    window.dispatchEvent(new Event("portfolio-analytics-updated"));
    return;
  }

  fetch("/api/analytics/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, ...details }),
    keepalive: true,
  }).catch(() => {});
}

export function trackVisitOnce() {
  try {
    if (window.sessionStorage.getItem("portfolio-visit-tracked")) return;
    window.sessionStorage.setItem("portfolio-visit-tracked", "true");
    trackAnalytics("visit", { source: document.referrer ? new URL(document.referrer).hostname : "direct" });
  } catch {
    trackAnalytics("visit", { source: "direct" });
  }
}
