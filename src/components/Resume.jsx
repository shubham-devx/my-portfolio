import "../styless/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>My Resume</h2>

      <div className="resume-container">

        <div className="resume-card">
          <h3>MERN Stack Developer</h3>
          <p>View my resume focused on full stack development.</p>
          <a href="/mern-resume.pdf" target="_blank">View Resume</a>
        </div>

        <div className="resume-card">
          <h3>AI / ML Developer</h3>
          <p>Explore my AI-focused resume and projects.</p>
          <a href="/ai-resume.pdf" target="_blank">View Resume</a>
        </div>

      </div>
    </section>
  );
}

export default Resume;