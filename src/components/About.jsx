import "../styless/About.css";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaRocket } from "react-icons/fa";

function About({ about }) {
  const icons = [<FaCode />, <FaBrain />, <FaRocket />];

  return (
    <section className="about" id="about">

      {/* SECTION TITLE */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>About Me</h2>

        <p>
          {about.intro}
        </p>
      </motion.div>

      {/* GLASS CARDS */}
      <div className="about-grid">
        {about.cards.map((card, index) => (
          <motion.div
            className="about-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="about-icon">
              {icons[index % icons.length]}
            </div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default About;