
import { Link } from 'react-router-dom';
import React from "react";


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">Sign-Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
