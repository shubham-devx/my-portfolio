import "../styless/Navbar.css";

function Navbar({ profile, recruiterView, githubView, onToggleRecruiter, onToggleGithub }) {
  return (
    <nav className="navbar">
      <h2 className="logo">{profile.name}</h2>

      <ul className="nav-links">
        {recruiterView ? <><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#resume">Resume</a></li><li><a href="#contact">Contact</a></li></> : <><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></>}
        <li><button type="button" className="recruiter-toggle" onClick={onToggleRecruiter}>{recruiterView ? "Full Portfolio" : "Recruiter View"}</button></li>
        {!recruiterView && <li><button type="button" className="github-toggle" onClick={onToggleGithub}>{githubView ? "Hide GitHub" : "GitHub Live"}</button></li>}
        <li><a className="nav-admin" href="/admin">Admin ↗</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;