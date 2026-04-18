import "../styless/Certifications.css";

function Certifications() {
  const certs = [
    {
      title: "AI Mastery Course",
      link: "https://drive.google.com/file/d/1zzGZamCIcNlVQdYHY2gYL78pxe8AabEK/view",
    },
    {
      title: "Internship Completion Certificate",
      link: "https://drive.google.com/file/d/1tdWNO6x3a4Vapvq3CKTSJA1kFPetUbb6/view",
    },
    {
      title: "Java Hybrid Development – 1Stop.ai",
      link: "https://drive.google.com/file/d/1vLVSmGAPPI0s5V4lyJpI982kfGNVg2pb/view",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certs.map((cert, index) => (
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