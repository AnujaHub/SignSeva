import React from 'react';

const ModuleProgressList = ({ modules }) => (
  <div className="module-progress-list">
    <h3>Module Progress</h3>
    <ul>
      {modules.map((mod, index) => (
        <li key={index}>
          <strong>{mod.name}</strong>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${mod.percent}%` }}></div>
          </div>
          <span>{mod.percent}%</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ModuleProgressList;
