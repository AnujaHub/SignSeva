// ProgressCard.jsx
import React from 'react';

function ProgressCard() {
  return (
    <div className="progress-card">
      <div className="circle-progress" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
        <svg viewBox="0 0 36 36" className="progress-ring">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="45, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="circle-label">45%</div>
      </div>
      <div className="xp-section">
        <p>
          XP Level: <strong>240 XP</strong>
        </p>
        <button className="continue-btn">Keep Learning</button>
      </div>
    </div>
  );
}

export default ProgressCard;
