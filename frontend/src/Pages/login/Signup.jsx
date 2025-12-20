import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API integration here
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/Home');
  };

  return (
    <div className="main-container">
    <div className="auth-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a>.</p>
    </div>
    </div>
  );
}

export default SignUp;
