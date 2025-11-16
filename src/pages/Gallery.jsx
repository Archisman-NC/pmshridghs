import React from 'react';
import './PageStyles.css';

const Gallery = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Gallery</h1>
        <div className="page-content">
          <p>
            Explore our school's memorable moments, events, and achievements through our photo gallery. 
            This collection showcases the vibrant life and activities at PMShri Dharmanagar Govt. Girls' H.S. School.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">📸</div>
              <h3>School Events</h3>
              <p>Annual functions, cultural programs, and special celebrations</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🎓</div>
              <h3>Academic Activities</h3>
              <p>Classroom learning, science exhibitions, and educational tours</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🏆</div>
              <h3>Achievements</h3>
              <p>Award ceremonies and prize distribution events</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🏫</div>
              <h3>Campus Life</h3>
              <p>School infrastructure, classrooms, and facilities</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🎨</div>
              <h3>Art & Culture</h3>
              <p>Art exhibitions, dance performances, and cultural activities</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">⚽</div>
              <h3>Sports</h3>
              <p>Sports competitions and physical education activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
