export function trackAnalytics(event, details = {}) {
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
