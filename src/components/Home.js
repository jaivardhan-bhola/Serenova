import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Meditation.png';
import { loggedIn, name } from './Auth';
const Home = () => {
  return (
    <div>
      <nav className="navbar">
        
        <div className="navbar-logo">Serenova</div>
        <div className="navbar-links">
          <a href="/MoodTracker" className="navbar-link">Mood Tracking</a>
          <a href="/StressManagement" className="navbar-link">Stress Management</a>
          <a href="#" className="navbar-link">Recommendations</a>
          <a href="#" className="navbar-link">Community</a>
          <a href="#" className="navbar-link">Resources</a>
          <a href="#" className="navbar-link">Assessments</a>
        </div>
      </nav>
      <div className="home-section">
        <img src={logo} alt="Serenova Logo" className="logo" /> <br />
        <div className="home-title">
        Welcome to Serenova</div>
        <div className="home-description">Your Personalized Mental Well-being Companion <br /></div>
        {loggedIn ? (
            <span className="navbar-welcome">Welcome back, {name}</span>
          ) : (
            <Link to="/registration" className="get-started-button">Get Started</Link>
          )}
      </div>

    </div>
  );
};

export default Home;
