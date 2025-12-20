import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from '../../Components/Flashcard/Flashcard';
import lettersDeck from '../../data/alphabets.js';
import '../../Styles/FlashcardPage.css';

export default function AlphabetFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const progress = ((currentIndex + 1) / lettersDeck.length) * 100;

  // Restore saved progress on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem('alphabetCardIndex');
    if (savedIndex) {
      setCurrentIndex(Number(savedIndex));
    }
  }, []);

  // Save progress whenever index changes
  useEffect(() => {
    localStorage.setItem('alphabetCardIndex', currentIndex);
  }, [currentIndex]);

  const currentCard = lettersDeck[currentIndex];

  return (
    <div className="flashcard-page">
      <div className="flashcard-header">

        <h1>Alphabet Flashcards (A-Z)</h1>
        <p className="subheading">Learn all 26 letters in Indian Sign Language</p>
      </div>

<div className="flashcard-content">

  {/* Progress Bar */}
  <div className="progress-container-wrapper">
    <div className="progress-container" aria-label="Flashcard progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
    <div className="progress-text">
      {currentIndex + 1} of {lettersDeck.length}
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
        {showBack ? 'Show Letter' : 'Show Sign'}
      </button>

      <button 
        onClick={() => {
          setCurrentIndex(prev => Math.min(prev + 1, lettersDeck.length - 1));
          setShowBack(false);
        }}
        disabled={currentIndex === lettersDeck.length - 1}
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