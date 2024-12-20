import React from 'react';
import './EducationCard.css';

export const EducationCard = ({ title, institution, duration ,icon}) => {
  return (
    <div className="card1-container"> 
      <div className="card1">
      <div className="card1-icon">
          {icon} {/* Display the icon above the text */}
        </div>
        <h3>{title}</h3>
        <p>{institution}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};