import React, { useState } from 'react';
import { sendContactEmail } from '../services/emailService';
import './Contact.css';
import { Phone3D, Mail3D, MapPin3D } from './Icons3D';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '918688700711'; // Hyderabad number
  const kurnoolNumber = '9063670603';
  const hydNumber = '8688700711';
  const emailAddress = 'hr@s28itsolutions.com';

  return (
    <section id="contact-page" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon whatsapp-icon">
                <Phone3D />
              </div>
              <h3>WhatsApp</h3>
              <p>Chat with us directly</p>
              <div className="contact-number-display">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20S28%20IT%20Academy,%20I%20would%20like%20to%20know%20more%20about%20your%20programs.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp-link"
                >
                  +91 {hydNumber}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon email-icon">
                <Mail3D />
              </div>
              <h3>Email</h3>
              <p>Send us an email</p>
              <div className="contact-number-display">
                <a
                  href={`mailto:${emailAddress}?subject=Inquiry%20about%20S28%20IT%20Academy`}
                  className="contact-link email-link"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon location-icon">
                <MapPin3D />
              </div>
              <h3>Contact Numbers</h3>
              <p>Call us at our centers</p>
              <div className="locations-list">
                <div className="location-item">
                  <span className="location-name">Kurnool:</span>
                  <a href={`tel:+91${kurnoolNumber}`} className="phone-link">+91 {kurnoolNumber}</a>
                </div>
                <div className="location-item">
                  <span className="location-name">Hyderabad:</span>
                  <a href={`tel:+91${hydNumber}`} className="phone-link">+91 {hydNumber}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="8688700711"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

