import "../styless/About.css";
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
        I’m Shubham Verma, a Computer Science Engineering student and Full Stack Developer with hands-on experience in building responsive, secure, and scalable web applications. I enjoy working across the development lifecycle—from crafting clean user interfaces to designing structured backend workflows.
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