import React from 'react';
import './CoCurricular.css';

const CoCurricular = () => {
  const coCurricularFacilities = [
    "Sports Facilities",
    "Self Defense",
    "Yoga Activities",
    "N.C.C",
    "N.S.S",
    "Eco Club",
    "Nature Walk",
    "Balika Mancha",
    "Prahari Club",
    "Consumer Club",
    "Alumni",
    "Open Gym",
    "Cooperative Society Canteen"
  ];

  return (
    <div className="co-curricular-page">
      <section className="co-curricular-hero">
        <div className="container">
          <h1 className="page-title">Co-Curricular & Student Development</h1>
          <p className="page-subtitle">
            Comprehensive development opportunities beyond academics for holistic growth
          </p>
        </div>
      </section>

      <section className="co-curricular-content">
        <div className="container">
          <div className="facilities-list">
            {coCurricularFacilities.map((facility, index) => (
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

export default CoCurricular;
