import "../styless/About.css";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaRocket } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      desc: "Building scalable MERN stack applications with modern UI & backend architecture.",
    },
    {
      icon: <FaBrain />,
      title: "AI Integration",
      desc: "Exploring AI-powered solutions using OpenAI APIs and intelligent automation.",
    },
    {
      icon: <FaRocket />,
      title: "Growth Mindset",
      desc: "Focused on continuous learning, clean code practices and impactful products.",
    },
  ];

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
          Passionate about creating modern web applications,
          solving real-world problems and building impactful digital experiences.
        </p>
      </motion.div>

      {/* GLASS CARDS */}
      <div className="about-grid">
        {cards.map((card, index) => (
          <motion.div
            className="about-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="about-icon">
              {card.icon}
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