import "../styless/Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <h3>Todo App</h3>
          <p>
            A simple and user-friendly Todo application to add, delete, and
            manage daily tasks.But now working on it......
          </p>
          <p className="tech">Tech: React, CSS</p>

          <div className="project-links">
            <a href="https://taskflow-pwa-psi.vercel.app/?_vercel_share=gY188h3DOmSEnAhEySIvYuS66FxQTO6X" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/shubham-devx/taskflow-pwa.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website to showcase my skills, projects, and
            contact information.
          </p>
          <p className="tech">Tech: React, CSS</p>

          <div className="project-links">
            <a href="https://my-portfolio-jtk1.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/shubham-devx/my-portfolio.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <h3>Weather App</h3>
          <p>
            A weather application that fetches real-time weather data using an
            API.But now working on it......
          </p>
          <p className="tech">Tech: JavaScript, API</p>

          <div className="project-links">
            <a href="https://weather-app-seven-psi-82.vercel.app?_vercel_share=BzTUdEfUrY9o3mdCx3LIi834UwwQvnAW" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/shubham-devx/weather-app.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;