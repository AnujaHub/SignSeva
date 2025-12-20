// Pages/Other/Profile.jsx
import React from 'react';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import StatCard from '../../Components/Profile/StatCard';
import AchievementsGrid from '../../Components/Profile/AchievementsGrid';
import ModuleProgressList from '../../Components/Profile/ModuleProgressList';
import AIInsightsPanel from '../../Components/Profile/AIInsightsPanel';
import SettingsPanel from '../../Components/Profile/SettingsPanel';

// Valid hi2 icons
import { HiOutlineStar, HiOutlineFire, HiOutlineChartBar } from 'react-icons/hi2';

import '../../Styles/Profile.css';

export default function Profile() {
  const user = {
    name: "Vidhi",
    avatar: "/images/avatar.png",
    quote: "Every sign brings you closer to connection.",
    xp: 1250,
    streak: 6,
    progress: 78,
    achievements: ["Alphabet Ace", "Consistent Learner", "Quiz Star"],
    modules: [
      { name: "Alphabets", percent: 100 },
      { name: "Numbers", percent: 40 },
      { name: "Common Gestures", percent: 0 }
    ],
    aiStats: {
      accuracy: 82,
      strongest: "Alphabets",
      needsPractice: "Emotions"
    }
  };

  return (
    <div className="profile-page">
      <ProfileHeader name={user.name} avatar={user.avatar} quote={user.quote} />
      <div className="stats-row">
        <StatCard label="XP Level" value={user.xp} icon={<HiOutlineStar className="stat-icon" />} />
        <StatCard label="Streak" value={`${user.streak} days`} icon={<HiOutlineFire className="stat-icon" />} />
        <StatCard label="Progress" value={`${user.progress}%`} icon={<HiOutlineChartBar className="stat-icon" />} />
      </div>
      <AchievementsGrid items={user.achievements} />
      <ModuleProgressList modules={user.modules} />
      <AIInsightsPanel stats={user.aiStats} />
      <SettingsPanel />
    </div>
  );
}
