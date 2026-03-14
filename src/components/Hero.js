import React from 'react';
import './Hero.css';

const Hero = ({ onEnrollClick }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Empowering IT Careers Since 2016</span>
          </div>
          <h1 className="hero-title">
            Start Your IT Career
            <span className="gradient-text"> Early & Strong</span>
          </h1>
          <p className="hero-description">
            Join S28 IT Academy and build industry-relevant skills with our comprehensive training programs. 
            From foundation courses to career restart programs, we help you succeed in the IT industry.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('foundation')}
              className="btn btn-primary"
            >
              Explore Programs
            </button>
            <button 
              onClick={onEnrollClick}
              className="btn btn-secondary"
            >
              Enroll Now
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

