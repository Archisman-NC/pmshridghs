import React from 'react';
import './PageStyles.css';

const OurSchool = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Our School</h1>
        <div className="page-content">
          <p>
            PMShri Dharmanagar Govt. Girls' H.S. School has been a beacon of education in North Tripura 
            since its establishment in 1938. Our school is committed to providing quality education 
            and fostering the holistic development of our students.
          </p>
          <p>
            With a rich heritage spanning over eight decades, we have nurtured countless young women 
            to become confident, responsible, and enlightened citizens who contribute positively to society.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Our Mission</h3>
              <p>To provide quality education that empowers girls to become independent, confident, and socially responsible individuals.</p>
            </div>
            <div className="info-card">
              <h3>Our Vision</h3>
              <p>To be a leading educational institution that nurtures excellence, innovation, and character development in every student.</p>
            </div>
            <div className="info-card">
              <h3>Core Values</h3>
              <p>Integrity, Excellence, Discipline, Respect, and Service to Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
