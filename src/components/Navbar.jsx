import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    bottom:'initial',
    marginBottom:'30',
    width: '90%',
    backgroundColor: 'rgba(256, 256, 256, 0.0)',
    // color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    // zIndex: 1000,
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const linksStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    // fontWeight: 'bold',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    // border: '1px solid white',
    border:0 ,
    
    color: 'black',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '0px',
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={titleStyle}>FitTrack</h2>
      <div style={linksStyle}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/workouts" style={linkStyle}>Workouts</Link>
        <Link to="/schedule" style={linkStyle}>Schedule</Link>
        <Link to="/diet" style={linkStyle}>Diet Plan</Link>
        <button style={buttonStyle} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
