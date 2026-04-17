import "../styless/Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">

        <a href="https://your-link-1.com" target="_blank" className="cert-card">
          <h3>React Certification</h3>
          <p>Click to view certificate</p>
        </a>

        <a href="https://your-link-2.com" target="_blank" className="cert-card">
          <h3>Node.js Certification</h3>
          <p>Click to view certificate</p>
        </a>

        <a href="https://your-link-3.com" target="_blank" className="cert-card">
          <h3>AI Certification</h3>
          <p>Click to view certificate</p>
        </a>

      </div>
    </section>
  );
}

export default Certifications;