import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/terms-conditions" className="footer-link">Terms and Conditions</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
      </div>
      <div className="footer-icons">
        <a href="https://facebook.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
