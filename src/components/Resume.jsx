import "../styless/Resume.css";

function Resume({ resumes }) {
  return (
    <section className="resume" id="resume">

      <h2>Resume</h2>

      <div className="resume-container">

        {resumes.map((resume, index) => <div className="resume-card" key={index}><h3>{resume.title}</h3><p>{resume.description}</p><a href={resume.link} target="_blank" rel="noopener noreferrer">View Resume</a></div>)}

      </div>

    </section>
  );
}

export default Resume;