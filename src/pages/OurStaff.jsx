import React from 'react';
import './PageStyles.css';

const OurStaff = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Our Staff</h1>
        <div className="page-content">
          <p>
            Our dedicated team of educators and staff members are the backbone of our institution. 
            With their expertise, commitment, and passion for teaching, they create a nurturing 
            learning environment for our students.
          </p>
          <div className="staff-grid">
            <div className="staff-card">
              <div className="staff-placeholder">👩‍🏫</div>
              <h3>Teaching Staff</h3>
              <p>Experienced and qualified teachers dedicated to academic excellence</p>
            </div>
            <div className="staff-card">
              <div className="staff-placeholder">👩‍🔬</div>
              <h3>Subject Experts</h3>
              <p>Specialized faculty for Science, Arts, and Commerce streams</p>
            </div>
            <div className="staff-card">
              <div className="staff-placeholder">👩‍💼</div>
              <h3>Administrative Staff</h3>
              <p>Efficient administration ensuring smooth school operations</p>
            </div>
            <div className="staff-card">
              <div className="staff-placeholder">👩‍🔧</div>
              <h3>Support Staff</h3>
              <p>Dedicated support team maintaining school infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStaff;
