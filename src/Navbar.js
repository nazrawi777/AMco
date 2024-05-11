import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/logo.png';
import { FaUser } from 'react-icons/fa'; // Import user icon from Font Awesome
import './Header.css'; // Import CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close the menu after scrolling
    }
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => scrollToSection('home')}>Home</Link>
        <Link to="/" className="nav-link" onClick={() => scrollToSection('about')}>About</Link>
        
        <Link to="/" className="nav-link" onClick={() => scrollToSection('service')}>Service</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/" className="nav-link" onClick={() => scrollToSection('portfolio')}>Portfolio</Link>
        <Link to="/vacancyjob" className="nav-link">Vacancy</Link>
        {/* Add login icon with link */}
        <Link to="/Footer" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link" onClick={closeMenu}>
          <FaUser className="user-icon" />
        
        </Link>
      </nav>
    </header>
  );
};

export default Header;
