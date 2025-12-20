// Components/Profile/AchievementsGrid.jsx
import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2'; // Valid hi2 icon

const AchievementsGrid = ({ items }) => (
  <div className="achievements-grid">
    <h3>Achievements</h3>
    <div className="achievement-list">
      {items.map((item, index) => (
        <div key={index} className="achievement-badge">
          <HiCheckCircle className="achievement-icon" /> {item}
        </div>
      ))}
    </div>
  </div>
);

export default AchievementsGrid;
