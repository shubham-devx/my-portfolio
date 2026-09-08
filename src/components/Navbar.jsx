import "../styless/Navbar.css";
import { useState } from "react";

function Navbar({ profile, recruiterView, githubView, onToggleRecruiter, onToggleGithub }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "mobile-menu-open" : ""}`}>
      <h2 className="logo">{profile.name}</h2>
      <button type="button" className="mobile-menu-toggle" onClick={() => setMenuOpen((current) => !current)} aria-expanded={menuOpen} aria-label="Toggle navigation menu"><span /><span /><span /></button>

      <ul className="nav-links">
        {recruiterView ? <><li><a href="#skills" onClick={closeMenu}>Skills</a></li><li><a href="#projects" onClick={closeMenu}>Projects</a></li><li><a href="#resume" onClick={closeMenu}>Resume</a></li><li><a href="#contact" onClick={closeMenu}>Contact</a></li></> : <><li><a href="#home" onClick={closeMenu}>Home</a></li><li><a href="#about" onClick={closeMenu}>About</a></li><li><a href="#projects" onClick={closeMenu}>Projects</a></li><li><a href="#contact" onClick={closeMenu}>Contact</a></li></>}
        <li><button type="button" className="recruiter-toggle" onClick={() => { onToggleRecruiter(); closeMenu(); }}>{recruiterView ? "Full Portfolio" : "Recruiter View"}</button></li>
        {!recruiterView && <li><button type="button" className="github-toggle" onClick={() => { onToggleGithub(); closeMenu(); }}>{githubView ? "Hide GitHub" : "GitHub Live"}</button></li>}
        <li><a className="nav-admin" href="/admin" onClick={closeMenu}>Admin ↗</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;