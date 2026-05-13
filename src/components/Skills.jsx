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

function Skills() {

  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "#E34F26",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: "#1572B6",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "#F7DF1E",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      color: "#61DAFB",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "#3C873A",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "#ffffff",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "#47A248",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      color: "#00758F",
    },
    {
      icon: <FaRobot />,
      name: "AI Integration",
      color: "#8B5CF6",
    },
    {
      icon: <FaGitAlt />,
      name: "Git & GitHub",
      color: "#F1502F",
    },
  ];

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
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;