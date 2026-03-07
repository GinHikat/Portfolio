import { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = ({ personalData }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container container">
        <a href="#hero" className="nav-logo">
          {personalData.name.split(" ")[0]}
          <span className="gradient-text">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#habits" onClick={() => setMenuOpen(false)}>
            Habits
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a
            href="#contact"
            className="btn-primary btn-nav"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
