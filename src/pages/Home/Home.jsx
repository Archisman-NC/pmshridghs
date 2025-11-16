import React from 'react';
import Hero from '../../components/Hero/Hero';
import HighlightCard from '../../components/HighlightCard/HighlightCard';
import ContactCard from '../../components/ContactCard/ContactCard';
import Facilities from '../../components/Facilities/Facilities';
import './Home.css';

const Home = () => {
  const highlights = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Total Students',
      value: '1,200+',
      variant: 'primary'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      title: 'Established',
      value: '1965',
      variant: 'secondary'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Teachers',
      value: '45+',
      variant: 'accent'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: 'Classrooms',
      value: '30+',
      variant: 'success'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                value={highlight.value}
                variant={highlight.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to PM Shri Dharmanagar Govt. Girls' H.S. School</h2>
              <p>
                Established in 1965, our school has been a beacon of quality education 
                in the North Tripura district for over five decades. As a PM Shri School, 
                we are committed to providing holistic education that empowers young women 
                to become confident, responsible, and compassionate citizens.
              </p>
              <p>
                Our mission is to create a nurturing environment where every student can 
                discover her potential, develop critical thinking skills, and embrace the 
                values of discipline, integrity, and service to society.
              </p>
              <div className="about-features">
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Quality Education</span>
                </div>
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Safe Environment</span>
                </div>
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Modern Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/assets/images/pmshri.jpeg" 
                alt="PM Shri Dharmanagar Girls School"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Facilities</h2>
            <p>Modern infrastructure and facilities to support comprehensive learning</p>
          </div>
          <Facilities />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>We're here to help and answer any questions you might have</p>
          </div>
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
