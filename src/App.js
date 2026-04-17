import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
     <Certifications/>
     <Resume/>
      <Contact />

    </div>
  );
}

export default App;