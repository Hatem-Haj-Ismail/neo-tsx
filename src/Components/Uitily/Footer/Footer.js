import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import logo from "../../../img/png-ابيض-1.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Linke Seite: Logo und Beschreibung */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Neo Logo" />
          </div>
          <p className="footer__desc">Neo empowers you to create a seamless and powerful marketplace.</p>
        </div>

        {/* Mittig: Quick Links */}
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Rechte Seite: Kontakt & Socials */}
        <div className="footer__contact">
          <h3>Get in touch</h3>
          <p className="footer__email">info@neocart.io</p>
          <div className="footer__socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer-Bottom: Copyright & Links */}
      <div className="footer__bottom">
        <p>©NeoMarkets. All Rights Reserved.</p>
        <div className="footer__legal">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
