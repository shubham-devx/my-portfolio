import "../styless/Navbar.css";
import { useState } from "react";

function Navbar({ profile, githubView, onToggleGithub }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "mobile-menu-open" : ""}`}>
      <h2 className="logo">{profile.name}</h2>
      <button type="button" className="mobile-menu-toggle" onClick={() => setMenuOpen((current) => !current)} aria-expanded={menuOpen} aria-label="Toggle navigation menu"><span /><span /><span /></button>
      <ul className="nav-links">
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li><button type="button" className="github-toggle" onClick={() => { onToggleGithub(); closeMenu(); }}>{githubView ? "Hide GitHub" : "GitHub Live"}</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
