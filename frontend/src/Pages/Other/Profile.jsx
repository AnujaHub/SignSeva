// Pages/Other/Profile.jsx
import React, { useEffect, useState } from 'react';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import StatCard from '../../Components/Profile/StatCard';
import AchievementsGrid from '../../Components/Profile/AchievementsGrid';
import ModuleProgressList from '../../Components/Profile/ModuleProgressList';
import AIInsightsPanel from '../../Components/Profile/AIInsightsPanel';
import SettingsPanel from '../../Components/Profile/SettingsPanel';

// Valid hi2 icons
import { HiOutlineStar, HiOutlineFire, HiOutlineChartBar } from 'react-icons/hi2';

import '../../Styles/Profile.css';
import authService from '../../utils/authService';
import { auth } from '../../utils/firebase';
import userService from '../../utils/userService';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    let mounted = true;
    const unsubscribe = authService.onAuthChanged(async (authUser) => {
      try {
        if (!authUser) { if (mounted) setUser(null); return; }
        const data = await userService.getUser(authUser.uid);
        if (!mounted) return;
        setUser(data || null);
        setName(data?.name || data?.username || '');
        setQuote(data?.quote || '');
      } catch (e) {
        console.warn('Failed loading user in Profile', e);
      }
    });
    return () => { mounted = false; unsubscribe(); };
  }, []);

  const handleSave = async () => {
    if (!user) return;
    try {
      const uid = auth?.currentUser?.uid;
      await userService.updateUserFields(uid, { name, quote });
      const updated = await userService.getUser(uid);
      setUser(updated);
      // broadcast update so other components can react (no localStorage)
      window.dispatchEvent(new CustomEvent('user-updated', { detail: updated }));
      setEditing(false);
    } catch (e) {
      console.error('Failed to save profile', e);
      alert('Failed to save profile');
    }
  };

  return (
    <div className="profile-page">
      <ProfileHeader name={user?.username || user?.name || ''} avatar={user?.photoURL || '/images/avatar.png'} quote={user?.quote || ''} />
      <div className="profile-edit">
        {editing ? (
          <div className="edit-form">
            <label>
              nickname:
              <input value={quote} onChange={(e) => setQuote(e.target.value)} />
            </label>
            <div className="edit-actions">
              <button onClick={handleSave} className="primary-btn">Save</button>
              <button onClick={() => setEditing(false)} className="secondary-btn">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="stats-row">
            <StatCard label="XP Level" value={user?.xp || 0} icon={<HiOutlineStar className="stat-icon" />} />
            <StatCard label="Streak" value={`${user?.streak || 0} days`} icon={<HiOutlineFire className="stat-icon" />} />
            <StatCard label="Progress" value={`${user?.progress?.overall || 0}%`} icon={<HiOutlineChartBar className="stat-icon" />} />
          </div>
        )}
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setEditing(true)} className="primary-btn">Edit profile</button>
      </div>

      <AchievementsGrid items={user?.achievements || []} />
      <ModuleProgressList modules={(user?.modules) || []} />
      <AIInsightsPanel stats={user?.aiStats || {}} />
    </div>
  );
}
