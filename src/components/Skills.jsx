import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="icon html" />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon css" />
          <p>CSS3</p>
        </div>

        <div className="skill-card">
          <FaJs className="icon js" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact className="icon react" />
          <p>React.js</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="icon node" />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiMysql className="icon mysql" />
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="icon git" />
          <p>Git & GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;