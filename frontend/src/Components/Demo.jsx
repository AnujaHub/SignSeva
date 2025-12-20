import React from 'react';

const Demo = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the Sign Language Learning Platform</h1>
      </header>

      <div className="card">
        <h2>Start Learning Today!</h2>
        <p>
          Our platform helps you learn sign language at your own pace. Explore our
          interactive lessons and practice your skills.
        </p>

        {/* added: teal-focused search bar to demo new CSS */}
        <div className="search">
          <input className="search-input" placeholder="Search lessons, signs, topics..." aria-label="Search" />
          <button className="button">Search</button>
        </div>

        <button className="button" style={{ marginTop: '1rem' }}>Get Started</button>
      </div>

      <footer>
        <p>&copy; 2025 Sign Language Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Demo;
