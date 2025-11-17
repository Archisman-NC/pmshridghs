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

      {/* Message from AHM Section */}
      <section className="ahm-message" style={{
        background: '#f8f9fa',
        padding: '60px 0',
        margin: '40px 0',
        borderTop: '1px solid #e9ecef',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '60px'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <img 
              src="/assets/images/gallery/AHM.jpg"
              alt="AHM of PMShri Dharmanagar Govt. Girls' H.S. School"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.style.display = 'none';
                const container = e.target.parentElement;
                container.innerHTML = `
                  <div style="
                    padding: 2rem; 
                    text-align: center; 
                    color: #666;
                    background: #fff;
                    min-height: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  ">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
                    <p style="font-weight: 500; margin-bottom: 0.5rem;">AHM's Photo</p>
                    <p style="font-size: 0.9rem; color: #999; margin: 0;">Image not available</p>
                  </div>
                `;
              }}
            />
          </div>
          <div style={{ flex: '1.2' }}>
            <h2 style={{
              color: '#1a237e',
              fontSize: '2.2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '15px'
            }}>
              Message from AHM
              <span style={{
                content: "''",
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #DD3F00, #E68000)',
                borderRadius: '2px'
              }}></span>
            </h2>
            <div style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#333'
            }}>
              <p>Dear parents,</p>
              <p>Greetings from AHM's desk.</p>
              <p>
                As a PM SHRI School, we are committed to providing quality education rooted in innovation, inclusivity, and holistic development. Under the PM SHRI framework, our school is adopting modern classroom practices, strengthening digital learning, and promoting environmental awareness to create a safe and enriching learning environment for every girl.
              </p>
            </div>
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
