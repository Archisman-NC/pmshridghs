import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              PMSHRI DHARMANAGAR GOVT. GIRLS' H.S. SCHOOL
            </h1>
            <h2 className="hero-subtitle">
              (Estd: 1938)
            </h2>
            <p className="hero-description">
              One of the premier educational institutions in Tripura, dedicated to providing quality education and holistic development for girls in Dharmanagar, North Tripura District.
            </p>
            <div className="hero-actions">
              <a href="#about" style={{ backgroundColor: '#D0D0D0', color: '#1E1E1E', border: 'none', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontSize: '16px', fontWeight: '500' }}>
                Learn More
              </a>
              <a href="#contact" style={{ backgroundColor: '#D0D0D0', color: '#1E1E1E', border: 'none', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontSize: '16px', fontWeight: '500' }}>
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="hero-highlights">
            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="9" x2="15" y2="9"/>
                    <line x1="9" y1="13" x2="15" y2="13"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h3>UDISE Code</h3>
                  <p>160409000122</p>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h3>Location</h3>
                  <p>Dharmanagar, North Tripura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-decoration">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
