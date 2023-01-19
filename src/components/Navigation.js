import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="nav-bar d-flex align-items-center justify-content-between">
    <h1 className="math-title">Math-Magician</h1>
    <div className="mx-5">
      <Link to="/" className="link mx-5">
        Home
      </Link>
      |
      <Link to="/calculator" className="link mx-5">
        Calculator
      </Link>
      |
      <Link to="/quote" className="link mx-5">
        Quote
      </Link>
    </div>
  </nav>
);

export default Navigation;
