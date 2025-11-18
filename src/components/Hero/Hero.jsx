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
            <p className="hero-udise">
              UDISE Code: 16040900122
            </p>
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
          
          <div className="hero-logo">
            <img 
              src="/assets/images/Logo.jpg" 
              alt="PM Shri Dharmanagar Govt. Girls H.S. School Logo" 
              className="logo-image"
            />
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
