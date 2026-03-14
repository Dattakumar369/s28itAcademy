import React from 'react';
import './FoundationProgram.css';
import { GraduationCap3D, Code3D, Clock3D, Book3D, Dollar3D, Star3D } from './Icons3D';

const FoundationProgram = () => {
  return (
    <section id="foundation" className="foundation-program">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Foundation Program</span>
          <h2 className="section-title">Start Your IT Career Early!</h2>
          <p className="section-subtitle">
            At S28 IT Academy, we believe that building strong technical skills early can give students 
            a powerful advantage in their careers. Our Foundation Program is specially designed for 
            engineering and degree students who want to start learning industry-relevant technologies 
            while still pursuing their graduation.
          </p>
        </div>

        <div className="program-grid">
          <div className="program-card eligibility-card">
            <div className="card-icon">
              <GraduationCap3D />
            </div>
            <h3 className="card-title">Eligibility</h3>
            <p className="card-description">This program is open to:</p>
            <ul className="feature-list">
              <li>B.Tech Students – 1st Year to 3rd Year (Any Branch)</li>
              <li>Degree Students – B.Sc & B.Computers</li>
              <li>1st Year & 2nd Year Students</li>
            </ul>
            <div className="card-note">
              <strong>No prior coding experience is required. Beginners are welcome!</strong>
            </div>
          </div>

          <div className="program-card technologies-card">
            <div className="card-icon">
              <Code3D />
            </div>
            <h3 className="card-title">Technologies Covered</h3>
            <p className="card-description">
              Students will get a strong foundation in the following trending technologies:
            </p>
            <ul className="feature-list">
              <li>Java Programming</li>
              <li>Multi-Cloud Fundamentals</li>
              <li>DevOps Basics</li>
              <li>Artificial Intelligence & Machine Learning (AI & ML)</li>
            </ul>
            <div className="card-note">
              These technologies are widely used in modern software development, cloud computing, 
              and automation industries.
            </div>
          </div>

          <div className="program-card duration-card">
            <div className="card-icon">
              <Clock3D />
            </div>
            <h3 className="card-title">Course Duration</h3>
            <p className="card-duration">45 – 90 Days</p>
            <p className="card-description">Students will receive:</p>
            <ul className="feature-list">
              <li>Structured training sessions</li>
              <li>Hands-on practical learning</li>
              <li>Real-world technology exposure</li>
            </ul>
          </div>

          <div className="program-card training-card">
            <div className="card-icon">
              <Book3D />
            </div>
            <h3 className="card-title">Training Mode</h3>
            <p className="card-description">
              To support students from different locations, the course is available in:
            </p>
            <ul className="feature-list">
              <li>Offline Classroom Training</li>
              <li>Online Interactive Sessions</li>
            </ul>
            <div className="card-note">
              Students can choose the mode that best fits their schedule.
            </div>
          </div>

          <div className="program-card fee-card">
            <div className="card-icon">
              <Dollar3D />
            </div>
            <h3 className="card-title">Course Fee</h3>
            <div className="fee-amount">₹12,000</div>
            <p className="card-description">
              This affordable program is designed to help students start their IT learning journey 
              early without financial burden.
            </p>
          </div>

          <div className="program-card benefits-card">
            <div className="card-icon">
              <Star3D />
            </div>
            <h3 className="card-title">Why Join the Foundation Program?</h3>
            <ul className="feature-list">
              <li>Learn industry-demand technologies early in your career</li>
              <li>Build strong programming fundamentals</li>
              <li>Gain confidence in modern IT tools and platforms</li>
              <li>Get guidance from experienced trainers</li>
              <li>Prepare for advanced programs and internships</li>
            </ul>
          </div>
        </div>

        <div className="motivation-section">
          <div className="motivation-content">
            <h3 className="motivation-title">Motivation for Students</h3>
            <p className="motivation-text">
              Starting early gives you a huge advantage. Students who begin learning technical skills 
              during their 1st or 2nd year of college are often better prepared for:
            </p>
            <div className="motivation-grid">
              <div className="motivation-item">Internships</div>
              <div className="motivation-item">Hackathons</div>
              <div className="motivation-item">Technical interviews</div>
              <div className="motivation-item">Software development careers</div>
            </div>
            <p className="motivation-quote">
              Your journey toward becoming a future software engineer starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationProgram;

