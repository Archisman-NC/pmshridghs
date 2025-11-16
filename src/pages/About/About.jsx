import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Our School</h1>
            <p>
              PM Shri Dharmanagar Govt. Girls' H.S. School has been a beacon of education 
              and empowerment for girls in North Tripura since 1938.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="about-wrapper">
            {/* School Description */}
            <div className="about-description">
                <h2>Our Legacy of Excellence</h2>
                <p>
                  Established in 1938, PM Shri Dharmanagar Govt. Girls' H.S. School stands as one 
                  of the oldest and most prestigious educational institutions in Tripura. For over 
                  eight decades, we have been dedicated to providing quality education and holistic 
                  development to generations of young women.
                </p>
                <p>
                  Our school is committed to creating an environment where every student can 
                  thrive academically, socially, and personally. We believe in nurturing not just 
                  intellectual growth but also character development, leadership skills, and 
                  civic responsibility.
                </p>
                
                <h3>Our Mission</h3>
                <p>
                  To empower young women through quality education, fostering academic excellence, 
                  character development, and social responsibility, preparing them to become 
                  confident, compassionate, and capable leaders of tomorrow.
                </p>
                
                <h3>Our Vision</h3>
                <p>
                  To be a center of educational excellence that nurtures and empowers girls to 
                  become independent, confident, and socially responsible citizens who can contribute 
                  meaningfully to society and nation-building.
                </p>
                
                <h3>Core Values</h3>
                <ul className="values-list">
                  <li><strong>Excellence:</strong> Striving for the highest standards in education and character</li>
                  <li><strong>Integrity:</strong> Building honesty, ethics, and moral values</li>
                  <li><strong>Empowerment:</strong> Enabling girls to achieve their full potential</li>
                  <li><strong>Innovation:</strong> Embracing modern teaching methods and technologies</li>
                  <li><strong>Inclusivity:</strong> Creating an environment of respect and equality</li>
                </ul>
              </div>
            </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="about-wrapper">
            <h2 className="section-title">Our Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3>PM Shri School</h3>
                <p>Recognized as a PM Shri School for excellence in education</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H3v2h6v-2zm0-4H3v2h6V7zm0 8H3v2h6v-2zm12-8h-6v2h6V7zm0 4h-6v2h6v-2zm0 4h-6v2h6v-2z"/>
                  </svg>
                </div>
                <h3>Academic Excellence</h3>
                <p>Consistent outstanding performance in board examinations</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>85+ Years of Service</h3>
                <p>Serving the community with dedication and excellence</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
