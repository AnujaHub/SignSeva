import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineCheckCircle, HiOutlinePlay, HiOutlinePlus } from 'react-icons/hi';

const ModuleCard = ({ module }) => {
  const { title, description, progress, locked, thumbnail, link } = module;

  const getStatusLabel = () => {
    if (locked) return <><HiOutlineLockClosed className="inline-icon" /> Locked</>;
    if (progress === 100) return <><HiOutlineCheckCircle className="inline-icon" /> Completed</>;
    if (progress > 0) return <><HiOutlinePlay className="inline-icon" /> Continue</>;
    return <><HiOutlinePlus className="inline-icon" /> Start</>;
  };

  return (
    <div className={`module-card ${locked ? "locked" : ""}`}>
      <img src={thumbnail} alt={title} className="module-thumbnail" />
      <div className="module-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {!locked && (
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        )}
        {link && !locked ? (
          <Link to={link}>
            <button>{getStatusLabel()}</button>
          </Link>
        ) : (
          <button disabled={locked}>{getStatusLabel()}</button>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;
