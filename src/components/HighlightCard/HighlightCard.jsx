import React from 'react';
import './HighlightCard.css';

const HighlightCard = ({ icon, title, value, variant = 'default' }) => {
  return (
    <div className={`highlight-card highlight-card--${variant}`}>
      <div className="highlight-card__icon">
        {icon}
      </div>
      <div className="highlight-card__content">
        <h3 className="highlight-card__title">{title}</h3>
        <p className="highlight-card__value">{value}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
