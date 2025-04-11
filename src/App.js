// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import Schedule from './Pages/Schedule';
import DietPlan from './Pages/Diet';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute';
import './styles/App.css';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <div className="app">
        {isLoggedIn && <Navbar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/workouts" 
              element={
                <ProtectedRoute>
                  <Workouts />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/schedule" 
              element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/diet" 
              element={
                <ProtectedRoute>
                  <DietPlan />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
