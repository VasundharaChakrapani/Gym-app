// src/App.js
import React from 'react';
import  { useEffect } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import Schedule from './Pages/Schedule';
import Profile from './Pages/Profile';
import './styles/App.css';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute'

function App() {
  const username = localStorage.getItem('username');
   useEffect(() => {
    // Clear stored username every time app loads
    localStorage.removeItem('username');
  }, []);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

       
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/profile" element={<Profile />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
