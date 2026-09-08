import "../styless/Certifications.css";

function Certifications({ certifications }) {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>View Certificate →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;