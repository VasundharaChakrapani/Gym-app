// src/components/Navbar.jsx
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FitTrack</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
