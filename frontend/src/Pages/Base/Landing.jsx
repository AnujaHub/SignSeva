import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../Assets/hero.png';
import { HiHandRaised,HiOutlineRocketLaunch,HiOutlinePuzzlePiece, HiOutlineAcademicCap, HiOutlineBookOpen, HiOutlineCalculator, HiOutlineChatBubbleLeftRight, HiOutlineCpuChip } from 'react-icons/hi2';
import '../../Styles/Landing.css'; // Optional: if you want to separate landing styles

function Landing() {
  return (
    <div className="main-container">
    <main className="landing-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Sign Seva <HiHandRaised className="inline-icon" /></h1>
          <p>Learn Indian Sign Language interactively with AI-powered gesture recognition.</p>
          <div className="hero-buttons">
            <Link to="/signup"><button>Get Started</button></Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Sign Language Illustration" />
        </div>
      </section>

      <section className="features">
        <h2>What You’ll Learn</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3><HiOutlineBookOpen className="inline-icon" /> Alphabets</h3>
            <p>Master the A–Z of Indian Sign Language with step-by-step tutorials.</p>
          </div>
          <div className="feature-card">
            <h3><HiOutlineCalculator className="inline-icon" /> Numbers</h3>
            <p>Learn to count and use numbers with accurate sign formation.</p>
          </div>
          <div className="feature-card">
            <h3><HiOutlineChatBubbleLeftRight className="inline-icon" /> Phrases</h3>
            <p>Everyday conversational gestures to help you communicate fluently.</p>
          </div>
        </div>
      </section>

        <section className="landing-highlights">
        <h2><HiOutlineRocketLaunch className="inline-icon" /> Why Sign Seva?</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            <h3><HiOutlineCpuChip className="inline-icon" /> AI Practice</h3>
            <p>Real-time gesture recognition to correct your signs as you go.</p>
          </div>
          <div className="highlight-card">
            <h3><HiOutlinePuzzlePiece className="inline-icon" /> Gamified Modules</h3>
            <p>Unlock levels, earn XP, and stay motivated with progress tracking.</p>
          </div>
          <div className="highlight-card">
            <h3><HiOutlineAcademicCap className="inline-icon" /> Quizzes</h3>
            <p>Challenge yourself with fun quizzes and improve your memory of signs.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us to Learn ISL with AI Now! </h2>
        <Link to="/signup"><button>Start Learning</button></Link>
      </section>
    </main>
    </div>
  );
}

export default Landing;
