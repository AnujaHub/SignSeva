// NextModuleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NextModuleCard() {
  return (
    <div className="next-module-card">
      <img
        src="/src/assets/numbers.png"
        alt="Numbers module thumbnail"
        className="module-thumbnail"
      />
      <h3>Up Next: Numbers</h3>
      <p>40% completed</p>
      <Link to="/learn">
        <button className="resume-button">Continue Module</button>
      </Link>
    </div>
  );
}

export default NextModuleCard;
