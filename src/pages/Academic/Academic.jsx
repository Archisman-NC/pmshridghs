import React from 'react';
import './Academic.css';

const Academic = () => {
  const academicFacilities = [
    "Smart Classroom",
    "Science Lab",
    "PAL LAB",
    "Atal Tinkering LAB",
    "Robotics & AR-VR",
    "Bio-Tech Lab",
    "Dome Planetarium",
    "Library",
    "Vocational Education",
    "Competency Based Learning",
    "Experiential Learning",
    "Hands-on Skill Based Training",
    "Art Integrated Learning (Samriddhi)",
    "E-Learning",
    "Multiple Interactive Panel",
    "Internet Access for All",
    "Frequent Exposure Visit",
    "NIPUN Corner",
    "TLM Park",
    "School Innovation Council",
    "CPD & Capacity Building for Teachers",
    "Quartery School Magazine & Daily Newspaper",
    "Expert Talks (Adolescence, HIV, Drug De-addiction, Cyber Security)"
  ];

  return (
    <div className="academic-page">
      <section className="academic-hero">
        <div className="container">
          <h1 className="page-title">Academic Facilities</h1>
          <p className="page-subtitle">
            State-of-the-art academic infrastructure fostering excellence in education and innovation
          </p>
        </div>
      </section>

      <section className="academic-content">
        <div className="container">
          <div className="facilities-list">
            {academicFacilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <span className="facility-name">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;
