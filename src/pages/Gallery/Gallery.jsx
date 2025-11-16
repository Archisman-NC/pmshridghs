import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'activities', name: 'Activities' },
    { id: 'achievements', name: 'Achievements' }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Annual Day Celebration',
      category: 'events',
      thumbnail: '/assets/images/gallery/annual-day-thumb.jpg',
      full: '/assets/images/gallery/annual-day.jpg'
    },
    {
      id: 2,
      title: 'Science Exhibition',
      category: 'activities',
      thumbnail: '/assets/images/gallery/science-expo-thumb.jpg',
      full: '/assets/images/gallery/science-expo.jpg'
    },
    {
      id: 3,
      title: 'Smart Classroom',
      category: 'infrastructure',
      thumbnail: '/assets/images/gallery/classroom-thumb.jpg',
      full: '/assets/images/gallery/classroom.jpg'
    },
    {
      id: 4,
      title: 'Sports Day',
      category: 'events',
      thumbnail: '/assets/images/gallery/sports-day-thumb.jpg',
      full: '/assets/images/gallery/sports-day.jpg'
    },
    {
      id: 5,
      title: 'Computer Lab',
      category: 'infrastructure',
      thumbnail: '/assets/images/gallery/computer-lab-thumb.jpg',
      full: '/assets/images/gallery/computer-lab.jpg'
    },
    {
      id: 6,
      title: 'Cultural Program',
      category: 'activities',
      thumbnail: '/assets/images/gallery/cultural-thumb.jpg',
      full: '/assets/images/gallery/cultural.jpg'
    },
    {
      id: 7,
      title: 'Award Ceremony',
      category: 'achievements',
      thumbnail: '/assets/images/gallery/awards-thumb.jpg',
      full: '/assets/images/gallery/awards.jpg'
    },
    {
      id: 8,
      title: 'Library',
      category: 'infrastructure',
      thumbnail: '/assets/images/gallery/library-thumb.jpg',
      full: '/assets/images/gallery/library.jpg'
    },
    {
      id: 9,
      title: 'Science Lab',
      category: 'infrastructure',
      thumbnail: '/assets/images/gallery/science-lab-thumb.jpg',
      full: '/assets/images/gallery/science-lab.jpg'
    },
    {
      id: 10,
      title: 'Independence Day',
      category: 'events',
      thumbnail: '/assets/images/gallery/independence-thumb.jpg',
      full: '/assets/images/gallery/independence.jpg'
    },
    {
      id: 11,
      title: 'Art Competition',
      category: 'activities',
      thumbnail: '/assets/images/gallery/art-comp-thumb.jpg',
      full: '/assets/images/gallery/art-comp.jpg'
    },
    {
      id: 12,
      title: 'Prize Distribution',
      category: 'achievements',
      thumbnail: '/assets/images/gallery/prize-thumb.jpg',
      full: '/assets/images/gallery/prize.jpg'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <main className="gallery">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="container">
            <div className="gallery-hero-content">
              <h1>Photo Gallery</h1>
              <p>Capturing moments of learning, growth, and celebration</p>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="gallery-content">
          <div className="container">
            {/* Category Filter */}
            <div className="gallery-filters">
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map(image => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => openLightbox(image)}
                >
                  <div className="gallery-image-container">
                    <img 
                      src={image.thumbnail} 
                      alt={image.title}
                      onError={(e) => {
                        e.target.src = '/assets/images/gallery-placeholder.jpg';
                      }}
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        <h3>{image.title}</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.35-4.35"/>
                          <line x1="11" y1="8" x2="11" y2="14"/>
                          <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="gallery-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <h3>No photos found</h3>
                <p>There are no photos in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              
              {filteredImages.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav lightbox-prev" 
                    onClick={() => navigateLightbox('prev')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6"/>
                    </svg>
                  </button>
                  <button 
                    className="lightbox-nav lightbox-next" 
                    onClick={() => navigateLightbox('next')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </button>
                </>
              )}
              
              <div className="lightbox-image">
                <img 
                  src={selectedImage.full} 
                  alt={selectedImage.title}
                  onError={(e) => {
                    e.target.src = '/assets/images/gallery-placeholder.jpg';
                  }}
                />
              </div>
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
