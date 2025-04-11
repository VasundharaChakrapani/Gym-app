import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (!storedName) {
      navigate('/login'); // Not logged in → go to login
    } else {
      setUsername(storedName); // Set for display
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username'); // Log out
    navigate('/login');
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 className="welcome-text">Welcome, <span style={{ color: '#6d28d9' }}>{username}</span>!💪</h1>
        <p className="tagline">Your fitness journey starts now!</p>
        <blockquote className="quote">
          "Discipline is choosing between what you want now and what you want most."
        </blockquote>
        <div className="home-buttons">
          <button onClick={() => navigate('/workouts')}>🏋️ Start Workout</button>
          <button onClick={() => navigate('/schedule')}>📅 View Schedule</button>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>
    </div>
  );
}
