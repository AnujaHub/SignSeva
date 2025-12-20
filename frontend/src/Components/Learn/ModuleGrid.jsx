// Components/Learn/ModuleGrid.jsx

import React from 'react';
import ModuleCard from './ModuleCard';

const ModuleGrid = ({ modules }) => {
  return (
    <div className="module-grid">
      {modules.map(module => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleGrid;
