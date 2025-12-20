import React, { useState } from 'react';

const SettingsPanel = () => {
  const [name, setName] = useState('Vidhi');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      <label>
        Display Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default SettingsPanel;
