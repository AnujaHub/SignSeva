import React from 'react';
import { HiOutlineFire, HiOutlineStar, HiOutlineCheckCircle } from 'react-icons/hi2';

function StatsRow() {
  return (
    <section className="stats-row" aria-label="User stats">
      <div className="stat-box">
        <HiOutlineFire className="stat-icon" />
        <div className="stat-content">
          <span className="stat-label">Current Streak</span>
          <span className="stat-value">4 days</span>
        </div>
      </div>

      <div className="stat-box">
        <HiOutlineStar className="stat-icon" />
        <div className="stat-content">
          <span className="stat-label">Experience Points</span>
          <span className="stat-value">240 XP</span>
        </div>
      </div>

      <div className="stat-box">
        <HiOutlineCheckCircle className="stat-icon" />
        <div className="stat-content">
          <span className="stat-label">Modules Completed</span>
          <span className="stat-value">2 / 5</span>
        </div>
      </div>
    </section>
  );
}

export default StatsRow;
