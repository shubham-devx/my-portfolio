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
        I’m Shubham Verma, a Computer Science Engineering student passionate about building modern web applications. As a Full Stack Developer, I work across both frontend and backend to create responsive, scalable, and user-friendly digital experiences.
      </p>

      <p>
        My core stack includes <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL and Git& GitHub</strong> I’m also exploring AI integration and prompt engineering to develop intelligent and interactive applications.

I enjoy solving real-world problems through code and continuously improving my skills by building projects and experimenting with new technologies.
      </p>

      <p className="goal">
        🚀 My goal is to grow as a developer while contributing to impactful and innovative products.
      </p>
    </section>
  );
}

export default About;