import "../styless/GitHubActivity.css";
import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

const GITHUB_API = "https://api.github.com";

function getUsername(githubUrl) {
  return githubUrl?.match(/github\.com\/([^/]+)/)?.[1] || "shubham-devx";
}

function GitHubActivity({ github }) {
  const username = getUsername(github);
  const [data, setData] = useState({ repositories: [], events: [], loading: true, error: "" });

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubData() {
      try {
        const requestOptions = { headers: { Accept: "application/vnd.github+json" }, signal: controller.signal };
        const [repositoriesResponse, eventsResponse] = await Promise.all([
          fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&direction=desc&per_page=6`, requestOptions),
          fetch(`${GITHUB_API}/users/${username}/events/public?per_page=100`, requestOptions),
        ]);

        if (!repositoriesResponse.ok || !eventsResponse.ok) throw new Error("GitHub data is temporarily unavailable.");

        const repositories = await repositoriesResponse.json();
        const events = await eventsResponse.json();
        const repositoriesWithLanguages = await Promise.all(repositories.map(async (repository) => {
          try {
            const languagesResponse = await fetch(repository.languages_url, requestOptions);
            const languages = languagesResponse.ok ? await languagesResponse.json() : {};
            return { ...repository, languages: Object.keys(languages).slice(0, 3) };
          } catch {
            return { ...repository, languages: repository.language ? [repository.language] : [] };
          }
        }));

        setData({ repositories: repositoriesWithLanguages, events, loading: false, error: "" });
      } catch (error) {
        if (error.name !== "AbortError") setData({ repositories: [], events: [], loading: false, error: error.message });
      }
    }

    loadGitHubData();
    return () => controller.abort();
  }, [username]);

  const activity = useMemo(() => {
    const eventCounts = new Map();
    data.events.filter((event) => event.type === "PushEvent").forEach((event) => {
      const date = event.created_at.slice(0, 10);
      eventCounts.set(date, (eventCounts.get(date) || 0) + (event.payload.commits?.length || 0));
    });

    return Array.from({ length: 28 }, (_, index) => {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - (27 - index));
      const key = date.toISOString().slice(0, 10);
      return { key, count: eventCounts.get(key) || 0 };
    });
  }, [data.events]);

  const recentCommits = data.events.filter((event) => event.type === "PushEvent").reduce((total, event) => total + (event.payload.commits?.length || 0), 0);

  return (
    <section className="github-activity" id="github-activity">
      <div className="github-header">
        <div>
          <p className="eyebrow">LIVE FROM GITHUB</p>
          <h2>Open source,<br /><em>in motion.</em></h2>
        </div>
        <a className="github-profile-link" href={github} target="_blank" rel="noopener noreferrer"><FaGithub /> @{username}</a>
      </div>

      {data.loading && <div className="github-status">Loading GitHub activity...</div>}
      {!data.loading && data.error && <div className="github-status">{data.error}</div>}
      {!data.loading && !data.error && <>
        <div className="github-summary">
          <div><strong>{data.repositories.length}</strong><span>latest repositories</span></div>
          <div><strong>{recentCommits}</strong><span>recent commits</span></div>
          <div className="activity-summary"><strong>{activity.filter((day) => day.count > 0).length}</strong><span>active days</span><div className="activity-grid" aria-label="Recent public contribution activity">{activity.map((day) => <span key={day.key} className={`activity-cell level-${Math.min(day.count, 4)}`} title={`${day.key}: ${day.count} commits`} />)}</div></div>
        </div>
        <div className="github-repositories">
          {data.repositories.map((repository) => <a className="github-repository" href={repository.html_url} target="_blank" rel="noopener noreferrer" key={repository.id}><div className="repository-heading"><h3>{repository.name}</h3><span>↗</span></div><p>{repository.description || "No description provided."}</p><div className="repository-meta"><span>{repository.languages.join(" / ") || "Code"}</span><span><FaStar /> {repository.stargazers_count}</span><span><FaCodeBranch /> {repository.forks_count}</span></div></a>)}
        </div>
      </>}
    </section>
  );
}

export default GitHubActivity;
