import React, { useEffect, useState } from 'react';
import './StudentsCorner.css';

const StudentsCorner = () => {
  const [activeTab, setActiveTab] = useState('notices');
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      id: 'image2',
      title: 'Academic Achievers',
      subtitle: 'Celebrating scholastic excellence',
      src: '/assets/images/gallery/image2.png'
    },
    {
      id: 'image3',
      title: 'Creative Learning',
      subtitle: 'Students excelling in co-curricular activities',
      src: '/assets/images/gallery/image3.png'
    },
    {
      id: 'image10',
      title: 'Events & Celebrations',
      subtitle: 'Capturing memorable school events',
      src: '/assets/images/gallery/image10.png'
    },
    {
      id: 'image13',
      title: 'Achievements',
      subtitle: 'Proud moments from recent competitions',
      src: '/assets/images/gallery/image13.png'
    },
    {
      id: 'image6',
      title: 'Cultural Showcase',
      subtitle: 'Celebrating traditions and performances',
      src: '/assets/images/gallery/image6.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const notices = [
    {
      title: "Annual Examination Schedule 2024",
      date: "2024-02-15",
      type: "examination",
      description: "Final examinations for Classes 10 and 12 will commence from March 1, 2024."
    },
    {
      title: "School Annual Day Celebration",
      date: "2024-02-10",
      type: "event",
      description: "Annual Day function to be held on February 28, 2024. All students are requested to attend."
    },
    {
      title: "Admission Open for Class XI",
      date: "2024-02-05",
      type: "admission",
      description: "Admissions for academic session 2024-25 are now open. Application forms available at school office."
    },
    {
      title: "Holiday Notice - Holi Festival",
      date: "2024-02-01",
      type: "holiday",
      description: "School will remain closed on March 7-8, 2024 on account of Holi festival."
    }
  ];

  const links = [
    {
      title: "NCERT e-Books",
      url: "https://ncert.nic.in/e-books.html",
      description: "Access all NCERT textbooks online"
    },
    {
      title: "CBSE Results",
      url: "https://cbseresults.nic.in/",
      description: "Check CBSE board examination results"
    },
    {
      title: "Digital India Portal",
      url: "https://digitalindia.gov.in/",
      description: "Government digital learning resources"
    },
    {
      title: "SWAYAM Portal",
      url: "https://swayam.gov.in/",
      description: "Online courses and study materials"
    },
    {
      title: "National Digital Library",
      url: "https://ndl.iitkgp.ac.in/",
      description: "Access to digital educational resources"
    },
    {
      title: "PM e-Vidya",
      url: "https://pmevidya.gov.in/",
      description: "Digital education initiatives by Government of India"
    }
  ];

  const downloads = [
    {
      title: "Academic Calendar 2024-25",
      type: "PDF",
      size: "2.3 MB",
      url: "#"
    },
    {
      title: "School Prospectus",
      type: "PDF",
      size: "5.1 MB",
      url: "#"
    },
    {
      title: "Admission Form 2024-25",
      type: "PDF",
      size: "156 KB",
      url: "#"
    },
    {
      title: "Fee Structure",
      type: "PDF",
      size: "89 KB",
      url: "#"
    },
    {
      title: "School Uniform Guidelines",
      type: "PDF",
      size: "1.2 MB",
      url: "#"
    },
    {
      title: "Transport Application Form",
      type: "PDF",
      size: "234 KB",
      url: "#"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'examination': return 'var(--saffron)';
      case 'event': return 'var(--green)';
      case 'admission': return 'var(--primary-blue)';
      case 'holiday': return 'var(--text-light)';
      default: return 'var(--text-light)';
    }
  };

  return (
    <>
      <main className="students-corner">
        {/* Hero Section */}
        <section className="students-hero">
          <div className="container">
            <div className="students-hero-content">
              <h1>Students' Corner</h1>
              <p>Your gateway to important notices, resources, and downloads</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="students-content">
          <div className="container">
            {/* Highlight Carousel */}
            <div className="students-slider">
              <button 
                className="slider-control prev" 
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>
              
              <div className="slider-window">
                {sliderImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      loading="lazy"
                    />
                    <div className="slider-caption">
                      <h3>{image.title}</h3>
                      <p>{image.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="slider-control next" 
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                ›
              </button>

              <div className="slider-indicators">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button
                className={`tab-button ${activeTab === 'notices' ? 'active' : ''}`}
                onClick={() => setActiveTab('notices')}
              >
                Notices
              </button>
              <button
                className={`tab-button ${activeTab === 'links' ? 'active' : ''}`}
                onClick={() => setActiveTab('links')}
              >
                Important Links
              </button>
              <button
                className={`tab-button ${activeTab === 'downloads' ? 'active' : ''}`}
                onClick={() => setActiveTab('downloads')}
              >
                Downloads
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Notices Tab */}
              {activeTab === 'notices' && (
                <div className="notices-section">
                  <div className="notices-list">
                    {notices.map((notice, index) => (
                      <div key={index} className="notice-card">
                        <div className="notice-header">
                          <div className="notice-date">{notice.date}</div>
                          <div 
                            className="notice-type"
                            style={{ backgroundColor: getTypeColor(notice.type) }}
                          >
                            {notice.type.toUpperCase()}
                          </div>
                        </div>
                        <h3 className="notice-title">{notice.title}</h3>
                        <p className="notice-description">{notice.description}</p>
                        <button className="notice-link">Read More →</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links Tab */}
              {activeTab === 'links' && (
                <div className="links-section">
                  <div className="links-grid">
                    {links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-card"
                      >
                        <div className="link-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </div>
                        <h3 className="link-title">{link.title}</h3>
                        <p className="link-description">{link.description}</p>
                        <span className="link-url">Visit Website →</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloads Tab */}
              {activeTab === 'downloads' && (
                <div className="downloads-section">
                  <div className="downloads-list">
                    {downloads.map((download, index) => (
                      <a key={index} href={download.url} className="download-card">
                        <div className="download-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7,10 12,15 17,10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                        </div>
                        <div className="download-content">
                          <h3 className="download-title">{download.title}</h3>
                          <div className="download-meta">
                            <span className="download-type">{download.type}</span>
                            <span className="download-size">{download.size}</span>
                          </div>
                        </div>
                        <button className="download-button">Download</button>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentsCorner;
