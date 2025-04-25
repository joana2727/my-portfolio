import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
<nav className="nav container">
  <Link to="/" className="nav__logo">
    Mikks Garcia
  </Link>

  {/* Hamburger icon for small screens */}
  <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
    <i className="bx bx-menu"></i>
  </div>

  <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
    <ul className="nav__list grid">
      <li className="nav__item">
        <Link
          to="/"
          className={`nav__link ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-estate nav__icon"></i> Intro
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/skills"
          className={`nav__link ${
            location.pathname === "/skills" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-user nav__icon"></i> Skills
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/projects"
          className={`nav__link ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-file-alt nav__icon"></i> Projects
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/challenges"
          className={`nav__link ${
            location.pathname === "/challenges" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-briefcase-alt nav__icon"></i> Challenges & Learnings
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/plans"
          className={`nav__link ${
            location.pathname === "/portfolio" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-scenery nav__icon"></i> Future Plans
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/resume"
          className={`nav__link ${
            location.pathname === "/resume" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-message nav__icon"></i> Resume
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="/contact"
          className={`nav__link ${
            location.pathname === "/contact" ? "active-link" : ""
          }`}
        >
          <i className="uil uil-scenery nav__icon"></i> Contact
        </Link>
      </li>    </ul>

    {/* Close icon inside menu */}
    <i className="bx bx-x nav__close" onClick={() => showMenu(false)}></i>
  </div>
</nav>
    </header>
  );
};

export default Header;
