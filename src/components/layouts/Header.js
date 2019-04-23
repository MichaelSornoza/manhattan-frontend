import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title">Brand Name</h1>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/products">Product List</Link>
        </div>
      </div>
    </nav>
    <style jsx>{`
      .navbar {
        background-color: #3b425e !important;
      }
    `}</style>
  </header>
);

export default Header;
