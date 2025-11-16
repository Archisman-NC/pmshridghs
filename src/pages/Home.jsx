import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">PMShri Dharmanagar Govt. Girls' H.S. School</h1>
            <p className="hero-subtitle">
              Empowering Young Minds Since 1938 - One of the best schools in Tripura,
              located in Dharmanagar, North Tripura District
            </p>
            <div className="hero-info">
              <div className="info-item">
                <strong>Established:</strong> 1938
              </div>
              <div className="info-item">
                <strong>UDISE Code:</strong> 16040900122
              </div>
              <div className="info-item">
                <strong>Location:</strong> Dharmanagar, North Tripura
              </div>
            </div>
          </div>

          {/* 👉 Add this image box */}
          <div className="hero-image">
            <img
              src="/assets/images/pmschool.jpeg"
              alt="PMShri Dharmanagar Girls School"
            />
          </div>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <h2 className="section-title">Welcome to Our Institution</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                PMShri Dharmanagar Govt. Girls' H.S. School is a prestigious educational institution 
                dedicated to providing quality education to young women in North Tripura. With a rich 
                heritage spanning over eight decades, we have been nurturing generations of students 
                to become confident, responsible, and enlightened citizens.
              </p>
              <p>
                Our commitment to academic excellence, combined with a focus on holistic development, 
                ensures that every student reaches her full potential. We provide a safe, inclusive, 
                and stimulating environment where learning flourishes.
              </p>
            </div>
            <div className="quick-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  <p><strong>Phone:</strong> 03822-220317</p>
                  <p><strong>Mobile:</strong> +91 7085587947</p>
                  <p><strong>Email:</strong> headmasterdmngirls@gmail.com</p>
                  <p><strong>Address:</strong> Dharmanagar, North Tripura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Discover the qualities that make our institution a premier choice for education</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Academic Excellence</h3>
              <p>Strong focus on academic achievement with experienced faculty</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Holistic Development</h3>
              <p>Emphasis on extracurricular activities and overall growth</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏫</div>
              <h3>Safe Environment</h3>
              <p>Secure and supportive learning atmosphere for girls</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Rich Heritage</h3>
              <p>85+ years of educational excellence and tradition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
