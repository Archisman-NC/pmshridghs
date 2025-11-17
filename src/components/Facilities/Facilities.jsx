import React from 'react';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: "Classrooms",
      description: "Spacious and well-ventilated classrooms with modern teaching aids"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: "Library",
      description: "Well-stocked library with thousands of books and reading materials"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: "Science Labs",
      description: "Fully equipped physics, chemistry, and biology laboratories"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Computer Lab",
      description: "Modern computer lab with internet access and latest software"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Smart Classes",
      description: "Interactive smart classrooms with digital learning tools"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Health Care",
      description: "School infirmary with basic medical facilities and first aid"
    }
  ];

  return (
    <section className="facilities">
      <div className="container">
        <div className="facilities-header">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            We provide a comprehensive learning environment with modern facilities 
            to support our students' educational journey.
          </p>
        </div>

        <div className="facilities-buttons">
          <a href="/academic" className="facility-btn">
            Academic
          </a>
          <a href="/co-curricular" className="facility-btn">
            Co-Curricular
          </a>
          <a href="/campus-support" className="facility-btn">
            Campus & Student Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
