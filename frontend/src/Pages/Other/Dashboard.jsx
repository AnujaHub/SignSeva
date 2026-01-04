// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHandRaised } from 'react-icons/hi2';
import ProgressCard from '../../Components/Dashboard/ProgressCard';
import NextModuleCard from '../../Components/Dashboard/NextModuleCard';
import StatsRow from '../../Components/Dashboard/StatsRow';
import DailyTip from '../../Components/Dashboard/DailyTip';

import '../../Styles/Dashboard.css';
import authService from '../../utils/authService';
import userService from '../../utils/userService';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const goToQuiz = () => navigate('/quiz');

  useEffect(() => {
    let mounted = true;
    const unsubscribe = authService.onAuthChanged(async (authUser) => {
      try {
        if (!authUser) { if (mounted) setUser(null); return; }
        const data = await userService.getUser(authUser.uid);
        if (mounted) setUser(data);
      } catch (e) {
        console.warn('Failed loading user in Dashboard', e);
      }
    });
    const onUpdate = (ev) => { if (mounted) setUser(ev.detail); };
    window.addEventListener('user-updated', onUpdate);
    return () => { mounted = false; unsubscribe(); window.removeEventListener('user-updated', onUpdate); };
  }, []);

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
      Hey {user?.username || user?.name || 'Learner'} {user ? '🙂' : ''}
    </h1>
    <p className="streak-text">You’re on a {user?.streak || 0}-day learning streak, keep it up!</p>
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
