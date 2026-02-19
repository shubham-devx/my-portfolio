import "../styless/Projects.css";
import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      name: "Todo App",
      description:
        "A simple and user-friendly Todo application to add, delete, and manage daily tasks.",
      tech: "React, CSS",
      live: "https://taskflow-pwa-psi.vercel.app/?_vercel_share=gY188h3DOmSEnAhEySIvYuS66FxQTO6X",
      github: "https://github.com/shubham-devx/taskflow-pwa.git",
    },
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, projects, and contact information.",
      tech: "React, CSS",
      live: "https://my-portfolio-jtk1.vercel.app/",
      github: "https://github.com/shubham-devx/my-portfolio.git",
    },
    {
      name: "Weather App",
      description:
        "A weather application that fetches real-time weather data using an API.",
      tech: "JavaScript, API",
      live: "https://weather-app-seven-psi-82.vercel.app?_vercel_share=BzTUdEfUrY9o3mdCx3LIi834UwwQvnAW",
      github: "https://github.com/shubham-devx/weather-app.git",
    },
  ];

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech">Tech: {project.tech}</p>

            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;