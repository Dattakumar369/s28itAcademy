import React from 'react';
import './Footer.css';

const Footer = ({ onEnrollClick }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappNumber = '918688700711'; // Hyderabad number
  const kurnoolNumber = '9063670603';
  const hydNumber = '8688700711';
  const emailAddress = 'hr@s28itsolutions.com';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">About S28 IT Academy</h3>
            <p className="footer-text">
              S28 IT Academy has been empowering students with industry-relevant skills since 2016, 
              helping them build successful careers in the IT industry.
            </p>
            <div className="locations">
              <div className="location-item">
                <span className="location-label">Kurnool:</span>
                <a href={`tel:+91${kurnoolNumber}`} className="footer-phone-link">+91 {kurnoolNumber}</a>
              </div>
              <div className="location-item">
                <span className="location-label">Hyderabad:</span>
                <a href={`tel:+91${hydNumber}`} className="footer-phone-link">+91 {hydNumber}</a>
              </div>
            </div>
          </div>

          <div className="footer-section programs">
            <h3 className="footer-title">Our Programs</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('foundation')} className="footer-link">
                  Foundation Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('career-restart')} className="footer-link">
                  Career Restart Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('intensive-career')} className="footer-link">
                  Intensive Career Program
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-text">
              Get in touch with us through:
            </p>
            <div className="contact-info">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20S28%20IT%20Academy,%20I%20would%20like%20to%20know%20more%20about%20your%20programs.`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link whatsapp"
              >
                WhatsApp: +91 {hydNumber}
              </a>
              <a
                href={`mailto:${emailAddress}?subject=Inquiry%20about%20S28%20IT%20Academy`}
                className="footer-contact-link email"
              >
                Email: {emailAddress}
              </a>
              <button onClick={onEnrollClick} className="footer-enroll-btn">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} S28 IT Academy. All rights reserved.
          </p>
          <p className="tagline">
            Your IT Career Starts Here
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

