import React from 'react';
import './PageStyles.css';

const ContactUs = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="page-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We welcome your inquiries and feedback. Please feel free to reach out to us 
                using the contact information below or visit our school campus.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <p>03822-220317</p>
                  <p>+91 7085587947</p>
                </div>
                
                <div className="contact-item">
                  <h3>✉️ Email</h3>
                  <p>headmasterdmngirls@gmail.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>📍 Address</h3>
                  <p>PMShri Dharmanagar Govt. Girls' H.S. School</p>
                  <p>Dharmanagar, North Tripura</p>
                  <p>Tripura, India</p>
                </div>
                
                <div className="contact-item">
                  <h3>🏫 School Details</h3>
                  <p><strong>Established:</strong> 1938</p>
                  <p><strong>UDISE Code:</strong> 16040900122</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
