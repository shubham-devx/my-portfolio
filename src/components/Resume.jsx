import "../styless/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">

      <h2>Resume</h2>

      <div className="resume-container">

        {/* MERN */}
        <div className="resume-card">

          <h3>MERN Stack Developer</h3>

          <p>
            Full stack development resume focused on
            scalable web applications and backend systems.
          </p>

          <a
            href="https://drive.google.com/file/d/1jiybHq1COvWrfNhnY7B77kybguDs7e4H/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume →
          </a>

        </div>

        {/* AI */}
        <div className="resume-card">

          <h3>AI / ML Developer</h3>

          <p>
            AI-focused resume showcasing intelligent
            systems, APIs and machine learning projects.
          </p>

          <a
            href="https://drive.google.com/file/d/1UEVjW3mJiV7IyrUjlV0NfSC6rbO_wJR8/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;