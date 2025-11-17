import React from 'react';
import './CampusSupport.css';

const CampusSupport = () => {
  const campusFacilities = [
    "Green Initiative",
    "Green Campus",
    "Students Friendly Furniture",
    "Bal Vatika",
    "Medical Aid",
    "Psychological Counselling",
    "Carrier Counselling",
    "Medicinal & Kitchen Garden",
    "Vermicompost Pit"
  ];

  return (
    <div className="campus-support-page">
      <section className="campus-support-hero">
        <div className="container">
          <h1 className="page-title">Campus, Well-being & Green Initiatives</h1>
          <p className="page-subtitle">
            Creating a sustainable, nurturing environment for student wellness and growth
          </p>
        </div>
      </section>

      <section className="campus-support-content">
        <div className="container">
          <div className="facilities-list">
            {campusFacilities.map((facility, index) => (
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

export default CampusSupport;
