import "../styless/Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Building Modern <br />
            Web Experiences.
          </h1>

          <h2>Full Stack & AI Developer</h2>

          <p>
            I create scalable, responsive and AI-powered web applications
            using modern technologies like React.js, Node.js, MongoDB,
            Express.js and OpenAI APIs.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">
              View Projects
            </a>

            <a href="#contact" className="hero-outline-btn">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/profile.jpeg" alt="Shubham" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;