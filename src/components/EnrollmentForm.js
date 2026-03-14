import React, { useState } from 'react';
import { sendEnrollmentEmail } from '../services/emailService';
import './EnrollmentForm.css';

const EnrollmentForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    qualification: '',
    year: '',
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
      const result = await sendEnrollmentEmail(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          qualification: '',
          year: '',
          message: ''
        });

        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="enrollment-modal-overlay" onClick={onClose}>
      <div className="enrollment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>Enroll Now</h2>
          <p>Fill out the form below and we'll get back to you soon!</p>
        </div>

        <form onSubmit={handleSubmit} className="enrollment-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

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
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="8688700711"
              pattern="[0-9]{10}"
            />
          </div>

          <div className="form-group">
            <label htmlFor="program">Select Program *</label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Choose a program</option>
              <option value="Foundation Program">Foundation Program</option>
              <option value="Career Restart Program">Career Restart Program</option>
              <option value="Intensive Career Program">Intensive Career Program</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="qualification">Qualification *</label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              >
                <option value="">Select qualification</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.E">B.E</option>
                <option value="MCA">MCA</option>
                <option value="B.Sc">B.Sc</option>
                <option value="B.Computers">B.Computers</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="year">Year / Status</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g., 2nd Year, 2024 Graduate"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about yourself or any questions you have..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form-success">
              Thank you! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-error">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;

