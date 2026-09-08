import "../styless/Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaRobot,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function Skills({ skills }) {
  const icons = [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, SiExpress, SiMongodb, SiMysql, FaRobot, FaGitAlt];

  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <h2>Tech Stack</h2>

        <p>
          Technologies and tools I use to build modern,
          scalable and intelligent applications.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}

            whileHover={{
              y: -10,
            }}
          >

            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {(() => { const Icon = icons[index % icons.length]; return <Icon />; })()}
            </div>

            <h3>{skill.name}</h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;