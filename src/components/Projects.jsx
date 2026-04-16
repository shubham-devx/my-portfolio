import "../styless/Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "Todo App",
      description:
        "A simple and user-friendly Todo application to manage daily tasks.",
      tech: "React.js • JavaScript • HTML • CSS",
      live: "https://taskflow-pwa-psi.vercel.app/?_vercel_share=gY188h3DOmSEnAhEySIvYuS66FxQTO6X",
      github: "https://github.com/shubham-devx/taskflow-pwa.git",
    },
    
    {
      name: "Weather App",
      description:
        "Real-time weather app using API integration.",
      tech: "React • API • JavaScript",
      live: "https://weather-app-seven-psi-82.vercel.app?_vercel_share=BzTUdEfUrY9o3mdCx3LIi834UwwQvnAW",
      github: "https://github.com/shubham-devx/weather-app.git",
    },
    {
      name: "Global Intelligence Analysis",
      description:
        "Global intelligence data analysis using APIs.",
      tech: "Python • Pandas • OpenAI • Data Analysis",
      live: "https://global-intelligence-analysis.vercel.app",
      github: "https://github.com/shubham-devx/GLOBAL-INTELLIGENCE-ANALYSIS.git",
    },
    {
      name: "AI Gym Trainer",
      description:
        "AI-powered fitness assistant for personalized workouts.",
      tech: "MERN • OpenAI • Prompt Engineering",
      live: "https://fintness-tracker-agent-client.vercel.app",
      github: "https://github.com/shubham-devx",
    },
    {
      name: "Digital Temple",
      description:
        "Virtual worship platform with interactive features.",
      tech: "React • Router • Vercel",
      live: "https://digital-temple.vercel.app",
      github: "https://github.com/shubham-devx/digitalTemple.git",
    },
    {
      name: "Fit Tracker",
      description:
        "Personal fitness tracking application.",
      tech: "React • JavaScript • CSS",
      live: "https://fit-tracker-by-shubham.vercel.app",
      github: "https://github.com/shubham-devx",
    },
    {
      name: "SpamSense AI",
      description:
        "AI-powered SMS fraud detection system that classifies messages as spam or safe in real time using machine learning.",
      tech: "Python, Streamlit, Scikit-learn, NLP(TF-IDF)",
      live: "https://ai-scam-detector-38gup2dgmpwfpxaucro6sq.streamlit.app/",
      github: "https://github.com/shubham-devx",
    },
  ];

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