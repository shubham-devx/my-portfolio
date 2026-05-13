import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Resume />

      <Certifications />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;