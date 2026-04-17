// import "../styless/Hero.css";
// import { motion } from "framer-motion";

// function Hero() {
//   const scrollToProjects = () => {
//     document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="hero" id="home">

//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Hi, I’m Shubham.
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         Full Stack Developer
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         I design and build clean, scalable and AI-powered web applications.
//       </motion.p>

//       <motion.button
//         onClick={scrollToProjects}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         View Work →
//       </motion.button>

//     </section>
//   );
// }

// export default Hero;


import "../styless/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>Hi, I’m Shubham 👋</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I design and build clean, scalable and AI-powered web applications.
          </p>

          <a href="#projects" className="hero-btn">View Work →</a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src="../profile.jpeg" alt="Shubham" />
        </div>

      </div>
    </section>
  );
}

export default Hero;