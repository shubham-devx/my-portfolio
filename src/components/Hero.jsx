import "../styless/Hero.css";
import { motion } from "framer-motion";

function Hero({ profile }) {
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
          <p className="eyebrow">AVAILABLE FOR SELECT PROJECTS</p>

          <h1>{profile.headline}</h1>

          <h2>{profile.role}</h2>

          <p>{profile.intro}</p>

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
          <img src={profile.image} alt={profile.name} />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;