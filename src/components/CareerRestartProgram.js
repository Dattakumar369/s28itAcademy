import React from 'react';
import './CareerRestartProgram.css';
import { Clock3D, User3D } from './Icons3D';

const CareerRestartProgram = () => {
  return (
    <section id="career-restart" className="career-restart-program">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Career Restart Program</span>
          <h2 className="section-title">For Career Gap Candidates</h2>
          <p className="section-subtitle">
            Powered by S28 IT Academy
          </p>
        </div>

        <div className="hero-message">
          <div className="message-box">
            <p className="question">Took a break from your IT career?</p>
            <p className="problem">Facing rejections because of a career gap?</p>
            <p className="solution">Now it's time to restart stronger than ever!</p>
          </div>
        </div>

        <div className="tagline-section">
          <div className="tagline-container">
            <div className="quote-mark quote-start">"</div>
            <p className="tagline">
              Your career gap is not the end of your story — it's the pause before your strongest comeback.
            </p>
            <div className="quote-mark quote-end">"</div>
          </div>
        </div>

        <div className="program-highlights">
          <h3 className="highlights-title">Program Includes</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>Industry-Oriented Technical Training</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>Payroll Management Support</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>Interview Preparation & Support</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>Real-Time Project Exposure</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"></span>
              <span>100% Job Assistance</span>
            </div>
          </div>
        </div>

        <div className="technologies-section">
          <h3 className="section-subtitle">Available Technologies</h3>
          <div className="technologies-grid">
            <div className="tech-item">Java Development</div>
            <div className="tech-item">Multi Cloud with DevOps</div>
            <div className="tech-item">Automation Testing</div>
            <div className="tech-item">ETL Testing</div>
            <div className="tech-item">Workday</div>
            <div className="tech-item">SAP GRC</div>
          </div>
        </div>

        <div className="program-details">
          <div className="detail-card">
            <div className="detail-icon">
              <Clock3D />
            </div>
            <h4 className="detail-title">Program Duration</h4>
            <p className="detail-value">30 – 90 Days</p>
            <p className="detail-note">(Depends on Technology)</p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <User3D />
            </div>
            <h4 className="detail-title">Who Can Apply?</h4>
            <ul className="eligibility-list">
              <li>B.Tech / BE / MCA / Any Degree</li>
              <li>Candidates with 3+ Years Career Gap</li>
              <li>Strong motivation to restart IT career</li>
            </ul>
            <p className="detail-note">Offline & Online</p>
          </div>
        </div>

        <div className="cta-section">
          <p className="cta-text">Limited Seats Available, Enroll Now</p>
        </div>
      </div>
    </section>
  );
};

export default CareerRestartProgram;

