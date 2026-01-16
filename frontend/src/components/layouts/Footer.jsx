import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">TomatoGuard</h3>
          <p className="footer-description">
            Helping farmers grow healthier tomatoes through AI-powered disease detection and prevention.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#detection">Disease Detection</a></li>
            <li><a href="#forum">Forum</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="#guide">Growing Guide</a></li>
            <li><a href="#diseases">Disease Database</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> tomatoguard@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +63 123456789</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Parañaque City, Philippines</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TomatoGuard. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;