import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, go directly to home
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      localStorage.setItem('username', username); // ✅ Save to localStorage
      navigate('/home');
    } else {
      alert('Please enter your name to continue.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Welcome to FitTrack</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="username">Enter your name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
