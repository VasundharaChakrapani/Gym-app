// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/App.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyGym</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
