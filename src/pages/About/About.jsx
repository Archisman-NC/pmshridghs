import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Our School</h1>
            <p>
              PM Shri Dharmanagar Govt. Girls' H.S. School has been a beacon of education 
              and empowerment for girls in North Tripura since 1938.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="about-wrapper">
            {/* School Description */}
            <div className="about-description">
                <h2>A. Vision Statement of PM SHRI Schools:</h2>
                <p>
                  PM SHRI schools shall set examples for the best in class in the country. The education in these schools will be such that it will nurture lifelong learners who carry the acumen and desire to learn, unlearn and relearn at all spectrums of life to become engaged, productive, and contributing citizens for building an equitable, inclusive, and plural society as envisaged by the National Education Policy 2020.
                </p>
                
                <h2>B. Mission Statement of PM SHRI Schools:</h2>
                <p>
                  PM SHRI schools aim to prepare more than 14,500 exemplar schools in which every student feels welcomed and cared for, where a safe and stimulating learning environment exists, where a wide range of learning experiences are offered, and where good physical infrastructure and appropriate resources conducive to learning are available to all students.
                </p>
              </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default About;
