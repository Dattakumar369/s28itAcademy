import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onEnrollClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <button className="logo" onClick={scrollToTop} aria-label="Go to home">
          <img src="/s28.png" alt="S28 IT Solutions" className="logo-image" />
        </button>
        <nav className="nav">
          <button onClick={() => scrollToSection('foundation')} className="nav-link">
            Foundation
          </button>
          <button onClick={() => scrollToSection('career-restart')} className="nav-link">
            Career Restart
          </button>
          <button onClick={() => scrollToSection('intensive-career')} className="nav-link">
            Intensive Career
          </button>
          <button onClick={() => scrollToSection('contact-page')} className="nav-link">
            Contact
          </button>
          <button onClick={onEnrollClick} className="nav-link cta-button">
            Enroll Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

