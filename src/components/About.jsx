import "../styless/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m Shubham Verma, a Computer Science Engineering student and Full Stack Developer
        passionate about building modern web applications.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I work with technologies like React.js, Node.js, Express.js, MongoDB, and MySQL.
        I also explore AI integration to build smarter and more interactive applications.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I enjoy solving real-world problems through clean UI and scalable backend systems.
      </motion.p>

      <motion.p
        className="goal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        🚀 My goal is to grow as a developer and build impactful products.
      </motion.p>

    </section>
  );
}

export default About;