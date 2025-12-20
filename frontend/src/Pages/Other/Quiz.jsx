import React, { useState } from 'react';
import '../../Styles/Quiz.css';

const quizQuestions = [
  {
    question: "What does the sign for 'Hello' look like?",
    options: ["Open hand wave", "Thumbs up", "Fist bump", "Peace sign"],
    answer: "Open hand wave"
  },
  {
    question: "How many letters are in the Indian Sign Language alphabet?",
    options: ["20", "26", "30", "15"],
    answer: "26"
  },
  {
    question: "Which of the following is a common gesture for 'Thank you'?",
    options: ["Hand to chin", "Hand wave", "Finger snap", "Clap hands"],
    answer: "Hand to chin"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      <h2>Indian Sign Language Quiz</h2>

      {!showResult ? (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
            <div className="question-text">
              {quizQuestions[currentQuestion].question}
            </div>
          </div>

          <div className="options-section">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`option-button ${selectedOption === option ? 
                  (option === quizQuestions[currentQuestion].answer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <button 
            className="next-button" 
            onClick={handleNext} 
            disabled={selectedOption === null}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </>
      ) : (
        <div className="result-section">
          <h3>Your Score: {score} / {quizQuestions.length}</h3>
          <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}
