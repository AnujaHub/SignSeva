import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    localStorage.setItem('isLoggedIn', 'true');
    onLogin(); // Updates App state
    navigate('/Home');
  };

  return (
    <div className="main-container">
    <div className="auth-form">
      <h2>Login to Sign Seva</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
      <p>New here? <a href="/signup">Create an account</a>.</p>
    </div>
    </div>
  );
}

export default Login;
