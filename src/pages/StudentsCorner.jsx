import React from 'react';
import './PageStyles.css';

const StudentsCorner = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Students Corner</h1>
        <div className="page-content">
          <p>
            Welcome to the Students Corner! This space is dedicated to our students' achievements, 
            activities, and resources that support their educational journey.
          </p>
          
          <div className="important-links">
            <h2>Important Links</h2>
            <div className="links-grid">
              <a href="https://tbse.tripura.gov.in/results" target="_blank" rel="noopener noreferrer" className="link-card">
                <h3>📊 TBSE Results</h3>
                <p>Check Tripura Board of Secondary Education examination results</p>
              </a>
            </div>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <h3>📚 Study Materials</h3>
              <p>Access to textbooks, notes, and reference materials for all subjects</p>
            </div>
            <div className="resource-card">
              <h3>🏆 Achievements</h3>
              <p>Celebrating our students' academic and extracurricular accomplishments</p>
            </div>
            <div className="resource-card">
              <h3>🎭 Activities</h3>
              <p>Information about cultural events, sports, and club activities</p>
            </div>
            <div className="resource-card">
              <h3>📝 Examinations</h3>
              <p>Exam schedules, results, and important academic notifications</p>
            </div>
            <div className="resource-card">
              <h3>💡 Career Guidance</h3>
              <p>Counseling and guidance for higher education and career opportunities</p>
            </div>
            <div className="resource-card">
              <h3>🌟 Alumni</h3>
              <p>Connect with our successful alumni and their inspiring stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsCorner;
