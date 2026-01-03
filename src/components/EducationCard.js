import React from 'react';
import './EducationCard.css';

export const EducationCard = ({ title, institution, duration, icon }) => {
  return (
    <div className="card1-container">
      <div className="card1">
        <div className="card1-icon">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{institution}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};