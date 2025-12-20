import React from 'react';

const StatCard = ({ label, value, icon }) => (
  <div className="stat-card">
    <span className="icon">{icon}</span>
    <div>
      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  </div>
);

export default StatCard;
