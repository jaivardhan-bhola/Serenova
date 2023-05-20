import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      type: 'podcast',
      title: '"The Happiness Lab" with Dr. Laurie Santos',
      source: 'Spotify',
      embedUrl: "https://open.spotify.com/embed/show/3i5TCKhc6GY42pOWkpWveG?utm_source=generator",
    },
    {
      type: 'video',
      title: '8 Things You Can Do To Improve Your Mental Health',
      source: 'YouTube',
      embedUrl: 'https://www.youtube.com/embed/3QIfkeA6HBY',
    },
    {
        type: 'podcast',
        title: "The Savvy Psychologist's Quick and Dirty Tips for Better Mental Health",
        source: 'Spotify',
        embedUrl: "https://open.spotify.com/embed/show/0184ojF3hjFhKfktahQK4G?utm_source=generator",
      },
      {
        type: 'video',
        title: '3 Ways to Overcome Anxiety | Olivia Remes | TEDxKlagenfurt',
        source: 'YouTube',
        embedUrl: 'https://www.youtube.com/embed/zDurWVRPZtU',
      },
      {
        type: 'podcast',
        title: 'The Tony Robbins Podcast',
        source: 'Spotify',
        embedUrl: 'https://open.spotify.com/embed/show/6fZXOzehJ9JtOyFjirF3qt?utm_source=generator',
      },
      {
        type: 'video',
        title: '10-Minute Meditation For Beginners',
        source: 'YouTube',
        embedUrl: 'https://www.youtube.com/embed/U9YKY7fdwyg',
      },
      {
        type: 'podcast',
        title: 'Therapy for Black Girls',
        source: 'Spotify',
        embedUrl: 'https://open.spotify.com/embed/show/7kPXrtK66kXyiqpKTtsqNN?utm_source=generator',
      },
      {
        type: 'video',
        title: 'How to Deal With Stress',
        source: 'YouTube',
        embedUrl: 'https://www.youtube.com/embed/AL-xenAuvpk',
      },
  ];
  
  return (
    <>
    <div className="navbar">
        <h1 className="navbar-logo">Serenova</h1>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/Login" className="navbar-link">Login</Link>
            <Link to ="/MoodTracker" className="navbar-link">Mood Tracker</Link>
            <Link to ="/Community" className="navbar-link">Community</Link>
            <Link to ="/StressManagement" className="navbar-link">Stress Management</Link>
            <Link to ="/Assessments" className="navbar-link">Assessments</Link>
        </div>
    </div>
    <div className="resources">
      <h2 className="title">Mental Health Resources</h2>
      {resources.map((resource, index) => (
        <div className="resource" key={index}>
          <h3 className="resource-title">{resource.title}</h3>
          <br/>
          {resource.type === 'podcast' && (
            <div className="embed-container spotify">
              <iframe
                title={resource.title}
                className="embed"
                src={resource.embedUrl}
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          )}
          {resource.type === 'video' && (
            <div className="embed-container youtube">
              <iframe
                title={resource.title}
                className="embed"
                src={resource.embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        
                allowFullScreen
              ></iframe>
            </div>
          )}
          <p className="resource-source">Source: {resource.source}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Resources;
