import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/signup">Signup</Link></li> */}
          </>
        ) : (
          <li><button onClick={onLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
