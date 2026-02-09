import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <p className="intro">
        I’m a passionate Frontend Developer with a strong interest in building
        clean, responsive, and user-friendly web applications.
      </p>

      <p>
        I primarily work with <strong>React.js</strong> and enjoy turning complex
        problems into simple, elegant solutions.
      </p>

      <p className="goal">
        🚀 My goal is to join a growth-oriented company and grow as a developer.
      </p>
    </section>
  );
}

export default About;