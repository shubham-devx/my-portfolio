import "../styless/Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaRobot
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="icon html" />, name: "HTML5" },
    { icon: <FaCss3Alt className="icon css" />, name: "CSS3" },
    { icon: <FaJs className="icon js" />, name: "JavaScript" },
    { icon: <FaReact className="icon react" />, name: "React.js" },
    { icon: <FaNodeJs className="icon node" />, name: "Node.js" },
    { icon: <SiMysql className="icon mysql" />, name: "MySQL" },
    { icon: <SiMongodb className="icon mongodb" />, name: "MongoDB" },
    { icon: <SiExpress className="icon express" />, name: "Express.js" },
    { icon: <FaRobot className="icon ai" />, name: "AI" },
    { icon: <FaGitAlt className="icon git" />, name: "Git & GitHub" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;