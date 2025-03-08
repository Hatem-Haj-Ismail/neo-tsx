import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Router-Link importieren

import "./Navbar.scss";
import logo from "../../../img/Screenshot-2024-08-18-at-12.14.52 AM-1..png";
import arIcon from "../../../img/ar.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
<nav className="navbar">
  <div className="left">
    <div className="logo">
      <img src={logo} alt="Neo Logo" />
    </div>
  </div>
  <div className="searchIcon">
  {/* Container für Hamburger und Such-Icon */}
  <div className="right-icons">
    <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  </div>

  <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
    <li><a href="/" data-replace="Home">Home</a></li>
    <li><Link to="/features" data-replace="Features">Features</Link></li>
    <li><a href="/faq" data-replace="FAQ">FAQ</a></li>
    <li><a href="contact" data-replace="Contact">Contact</a></li>
    <li className="arabic">
  <img src={arIcon} alt="Arabic Language" className="arIcon"  />
  <a href="#arabic" className="no-line" data-replace="العربية">العربية</a>
</li>
    <li>
      <button className="Button" data-text="LiveDemo">
        <span>Live Demo</span>
      </button>
    </li>
  </ul>
</nav>
  );
};

export default Navbar;