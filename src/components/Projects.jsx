import "../styless/Projects.css";
import { motion } from "framer-motion";

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live →
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;