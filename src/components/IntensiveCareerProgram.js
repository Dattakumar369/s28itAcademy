import React from 'react';
import './IntensiveCareerProgram.css';
import { Book3D, Laptop3D, Dollar3D, Chart3D, Building3D, Briefcase3D, Globe3D } from './Icons3D';

const IntensiveCareerProgram = () => {
  return (
    <section id="intensive-career" className="intensive-career-program">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Intensive Career Program</span>
          <h2 className="section-title">For Freshers</h2>
          <p className="section-subtitle">
            Associate Software Engineer Role - Java Trainee & QA Trainee
            <br />
            <span className="year-highlight">(2024, 2025 & 2026 Graduates)</span>
          </p>
        </div>

        <div className="hero-banner">
          <div className="banner-content">
            <p className="banner-text">
              Stop waiting for campus placements.
              <br />
              Start your IT career through our <strong>Train & Deploy Model</strong> and get deployed to Client MNC Companies
            </p>
          </div>
        </div>

        <div className="offer-banner">
          <div className="offer-content">
            <span className="offer-badge">Special Launch Offer</span>
            <h3 className="offer-title">50% Discount Available</h3>
            <p className="offer-text">Limited period launch offer for early applicants.</p>
          </div>
        </div>

        <div className="program-highlights">
          <h3 className="highlights-title">Program Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <Book3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">6 Months Industry-Oriented Training</h4>
                <p className="highlight-desc">Comprehensive training with real-world projects</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Laptop3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">FREE Laptop Provided</h4>
                <p className="highlight-desc">For Learning & Practice</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Dollar3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">₹12000 - 15000 Monthly Stipend</h4>
                <p className="highlight-desc">Includes PF & Medical Benefits</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Chart3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">Hands-on Real-Time Project Experience</h4>
                <p className="highlight-desc">Work on live projects</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Building3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">Direct Client Deployment Opportunity</h4>
                <p className="highlight-desc">Get placed in top MNCs</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Briefcase3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">PPO Based on Performance</h4>
                <p className="highlight-desc">Pre-Placement Offer opportunity</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <Globe3D />
              </div>
              <div className="highlight-content">
                <h4 className="highlight-title">Online & Offline Training Available</h4>
                <p className="highlight-desc">Choose your preferred mode</p>
              </div>
            </div>
          </div>
        </div>

        <div className="package-section">
          <h3 className="package-title">Package After Deployment</h3>
          <div className="package-cards">
            <div className="package-card">
              <div className="package-role">QA Engineer</div>
              <div className="package-amount">₹3 – ₹4 LPA</div>
            </div>
            <div className="package-card">
              <div className="package-role">Java Developer</div>
              <div className="package-amount">₹3.5 – ₹5.5 LPA</div>
            </div>
          </div>
        </div>

        <div className="fast-track-section">
          <div className="fast-track-card">
            <h4 className="fast-track-title">Already Trained Candidates?</h4>
            <p className="fast-track-text">
              We offer a <strong>Fast-Track Assessment</strong> option for direct deployment opportunities.
            </p>
          </div>
        </div>

        <div className="fee-section">
          <div className="fee-card">
            <h3 className="fee-title">Training Fee</h3>
            <div className="fee-details">
              <div className="fee-original">
                <span className="fee-label">Original Price:</span>
                <span className="fee-value original">₹2.4 Lakhs</span>
              </div>
              <div className="fee-discount">
                <span className="fee-label">After 50% Discount:</span>
                <span className="fee-value discounted">₹1.2 Lakhs</span>
                <span className="fee-gst">(Including 18% GST)</span>
              </div>
            </div>
            <div className="fee-note">
              <p>Fee is payable only after receiving an offer confirmation from S28 IT Academy</p>
            </div>
          </div>
        </div>

        <div className="warning-section">
          <p className="warning-text">
            <strong>Limited Seats | Screening-Based Selection</strong>
            <br />
            Apply early to secure your slot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntensiveCareerProgram;

