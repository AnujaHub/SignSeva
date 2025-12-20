import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Footer.css";

function Footer() {
 return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Sign Seva</h2>
          <p>Empowering inclusion through Indian Sign Language education.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Learn</h4>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/levels">Levels</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>Email: <a href="mailto:hello@signseva.org">hello@signseva.org</a></li>
            <li>Phone: +91-9876543210</li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sign Seva. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


