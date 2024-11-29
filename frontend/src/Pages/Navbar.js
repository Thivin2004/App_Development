import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function NavBar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/pricing" aria-label="Pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/about-us" aria-label="About Us">
            About Us
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/personal-trainers" aria-label="Personal Trainers">
            Personal Trainers
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/testimonial" aria-label="Testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/admin-dashboard" aria-label="Admin Dashboard">
            Admin Dashboard
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/contact-us" aria-label="Contact Us">
            Contact Us
          </Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link className="navbar-link" to="/login" aria-label="Login">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button className="navbar-button" onClick={handleLogout} aria-label="Logout">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
