import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../utils/authService';
import userService from '../../utils/userService';
import { auth } from '../../utils/firebase';
import '../../Styles/Login.css';

export default function SetUsername() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);

useEffect(() => {
  const unsub = authService.onAuthChanged(async (u) => {
    if (!u) {
      navigate('/login');
      return;
    }

    const doc = await userService.getUser(u.uid);

    if (doc && doc.username) {
      navigate('/home');
    } else {
      setChecking(false); // ✅ only show UI after check
    }
  });

  return () => unsub();
}, [navigate]);

if (checking) {
  return (
    <div className="main-container">
      <div className="auth-form">Loading...</div>
    </div>
  );
}

  const validate = (v) => /^[a-z0-9_]{3,15}$/.test(v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validate(username)) {
      setError('Username must be 3–15 chars: lowercase letters, numbers or underscore');
      return;
    }
    setLoading(true);
    try {
      const uid = auth.currentUser?.uid;
      if (!uid) throw new Error('Not authenticated');
      await authService.setUsername(uid, username);
      navigate('/home');
    } catch (err) {
      console.error('set username failed', err);
      setError(err.message || 'Failed to set username');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="auth-form">
        <h2>Choose a username</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="lowercase_letters_numbers_underscore" />
          </label>
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? 'Saving...' : 'Save username'}
          </button>
        </form>
        {error && <div className="error-msg">{error}</div>}
      </div>
    </div>
  );
}
