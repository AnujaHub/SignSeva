// Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHandRaised } from 'react-icons/hi2';
import ProgressCard from '../../Components/Dashboard/ProgressCard';
import NextModuleCard from '../../Components/Dashboard/NextModuleCard';
import StatsRow from '../../Components/Dashboard/StatsRow';
import DailyTip from '../../Components/Dashboard/DailyTip';

import '../../Styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const goToQuiz = () => navigate('/quiz');

  return (
    <div className="main-container">
    <main className="dashboard-container">


  {/* New grid structure */}
  <section className="dashboard-main-grid">
    {/* Left column: Tip + Stats */}
    <div className="dashboard-top">
      <StatsRow />
    </div>
    <div className="dashboard-left">
      <DailyTip /> 
        <header className="dashboard-header">
    <h1>
      Hey User :)
    </h1>
    <p className="streak-text">You’re on a 4-day learning streak , keep it up!</p>
    <button className="quiz-button" onClick={goToQuiz}>
      Start Quiz
    </button>
  </header>
    </div>

    {/* Right column grid: Progress + Next Module side-by-side */}
    <div className="dashboard-right">
      <ProgressCard />
      <NextModuleCard />
    </div>
  </section>
</main>
</div>
  );
}

export default Dashboard;
