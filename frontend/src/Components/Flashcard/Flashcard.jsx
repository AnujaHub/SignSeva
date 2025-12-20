import React from 'react';
import './Flashcard.css';

const Flashcard = ({ content, img, flipped, onFlip }) => {
  return (
    <div className="card-wrapper">
      <div
        className={`card-container ${flipped ? 'flipped' : ''}`}
        onClick={onFlip}
      >
        <div className="card-face card-front">
          <span className="card-content">{content}</span>
        </div>

        <div className="card-face card-back">
          <img src={img} alt={`Sign for ${content}`} className="card-img" />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
