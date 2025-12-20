import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from '../../Components/Flashcard/Flashcard';
import numbersDeck from '../../data/numbers.js';
import '../../Styles/FlashcardPage.css';

export default function NumberFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const progress = ((currentIndex + 1) / numbersDeck.length) * 100;

  // Restore saved progress on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem('numberCardIndex');
    if (savedIndex) {
      setCurrentIndex(Number(savedIndex));
    }
  }, []);

  // Save progress whenever index changes
  useEffect(() => {
    localStorage.setItem('numberCardIndex', currentIndex);
  }, [currentIndex]);

  const currentCard = numbersDeck[currentIndex];

  return (
    <div className="flashcard-page">
      <div className="flashcard-header">
        <h1>Number Flashcards (0-9)</h1>
        <p className="subheading">Learn all numbers in Indian Sign Language</p>
      </div>

     <div className="flashcard-content">

  {/* Progress Bar */}
  <div className="progress-container-wrapper">
    <div className="progress-container" aria-label="Flashcard progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
    <div className="progress-text">
      {currentIndex + 1} of {numbersDeck.length}
    </div>
  </div>

  <div className="flashcard-and-buttons">
    <Flashcard
      key={currentIndex}
      content={currentCard.content}
      img={currentCard.img}
      flipped={showBack}
      onFlip={() => setShowBack(!showBack)}
    />

    <div className="nav-buttons-vertical">
      <button 
        onClick={() => {
          setCurrentIndex(prev => Math.max(prev - 1, 0));
          setShowBack(false);
        }}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      <button onClick={() => setShowBack(prev => !prev)}>
        {showBack ? 'Show Number' : 'Show Sign'}
      </button>

      <button 
        onClick={() => {
          setCurrentIndex(prev => Math.min(prev + 1, numbersDeck.length - 1));
          setShowBack(false);
        }}
        disabled={currentIndex === numbersDeck.length - 1}
      >
        Next
      </button>

      <button 
        className="reset-progress-btn"
        onClick={() => {
          setCurrentIndex(0);
          setShowBack(false);
          localStorage.removeItem('alphabetCardIndex');
        }}
      >
        Reset Progress
      </button>
    </div>
  </div>
</div>


    </div>
  );
}