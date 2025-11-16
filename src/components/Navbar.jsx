import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <div className="brand-content">
              <img src="/assets/images/Logo.jpg" alt="School Logo" className="brand-logo" />
              <div className="brand-text">
                <h1>PMShri DGGHSS</h1>
              </div>
            </div>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-school" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Our School
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-staff" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Our Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students-corner" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Students Corner
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
