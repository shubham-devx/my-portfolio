import "../styless/Navbar.css";

function Navbar({ profile }) {
  return (
    <nav className="navbar">
      <h2 className="logo">{profile.name}</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="nav-admin" href="/admin">Admin ↗</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;