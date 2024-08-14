import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Gym Tracker</h1>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/classes">Classes</Link>
        <Link className="nav-link" to="/pricing">Pricing</Link>
        <Link className="nav-link" to="/contact">Contact Us</Link>
        <Link className="nav-link" to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
