import "../styless/AnalyticsDashboard.css";
import { useEffect, useState } from "react";

function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/analytics", { credentials: "include" })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not load analytics.");
        setAnalytics(data);
      })
      .catch((loadError) => setError(loadError.message));
  }, []);

  if (error) return <AdminSection title="Visitor analytics"><p className="analytics-message">{error}</p></AdminSection>;
  if (!analytics) return <AdminSection title="Visitor analytics"><p className="analytics-message">Loading private analytics...</p></AdminSection>;

  return <AdminSection title="Visitor analytics">
    <div className="analytics-stats"><Stat label="Portfolio visits" value={analytics.totals.visits || 0} /><Stat label="Projects viewed" value={sumValues(analytics.projects)} /><Stat label="Resume downloads" value={sumValues(analytics.resumes)} /></div>
    <AnalyticsList title="Most-viewed projects" values={analytics.projects} empty="No project views yet." />
    <AnalyticsList title="Resume downloads" values={analytics.resumes} empty="No resume downloads yet." />
    <AnalyticsList title="Traffic sources" values={analytics.sources} empty="No traffic sources yet." />
  </AdminSection>;
}

function AdminSection({ title, children }) { return <section className="analytics-section"><h2>{title}</h2>{children}</section>; }
function Stat({ label, value }) { return <div className="analytics-stat"><strong>{value}</strong><span>{label}</span></div>; }
function AnalyticsList({ title, values, empty }) { const rows = Object.entries(values).sort(([, first], [, second]) => second - first); return <div className="analytics-list"><h3>{title}</h3>{rows.length ? rows.map(([label, value]) => <div className="analytics-row" key={label}><span>{label}</span><strong>{value}</strong></div>) : <p className="analytics-empty">{empty}</p>}</div>; }
function sumValues(values) { return Object.values(values).reduce((total, value) => total + value, 0); }

export default AnalyticsDashboard;
