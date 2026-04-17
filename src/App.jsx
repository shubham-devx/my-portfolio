import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
       <Resume />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}

export default App;