import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MoodTracker.css';

const MoodTracker = () => {
  const [mood, setMood] = useState(null);
  const [notes, setNotes] = useState('');
  const [moodEntries, setMoodEntries] = useState([]);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleEntrySubmit = () => {
    if (mood) {
      const newEntry = {
        mood,
        notes,
        timestamp: new Date().toLocaleString(),
      };
      setMoodEntries([...moodEntries, newEntry]);
      setMood(null);
      setNotes('');
    }
  };

  return (
    <>
      <div className="navbar">
      <Link to="/" className="navbar-logo">Serenova</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/Login" className="navbar-link">Login</Link>
          <Link to ="/StressManagement" className="navbar-link">Stress Management</Link>

          <Link to = "/Community" className="navbar-link">Community</Link>
          <Link to = "/Resources" className="navbar-link">Resources</Link>
          <Link to = "/Assessments" className="navbar-link">Assessments</Link>
      
        </div>
      </div>
        <div className="mood-tracker">
      <h2 style={{ textAlign: 'center' }}>Mood Tracker</h2>
      <div className="mood-selection">
        <h3>Current Mood:</h3>
        <div className="mood-options">
          <button
            className={`mood-option ${mood === 'Happy' ? 'selected' : ''}`}
            onClick={() => handleMoodSelect('Happy')}
          >
            😊
          </button>
          <button
            className={`mood-option ${mood === 'Sad' ? 'selected' : ''}`}
            onClick={() => handleMoodSelect('Sad')}
          >
            😢
          </button>
          <button
            className={`mood-option ${
              mood === 'Anxious' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Anxious')}
          >
            😟
          </button>
          <button
            className={`mood-option ${
              mood === 'Scared' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Scared')}
          >
            😨
          </button>
          <button
            className={`mood-option ${
              mood === 'Angry' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Angry')}
          >
            😡
          </button>
          <button
            className={`mood-option ${
              mood === 'Disgust' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Disgust')}
          >
            🤢
          </button>
          <button
            className={`mood-option ${
              mood === 'Surprise' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Surprise')}
          >
            😮
          </button>
          <button
            className={`mood-option ${
              mood === 'Tired' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Tired')}
          >
            😴
          </button>
          <button
            className={`mood-option ${
              mood === 'Jealous' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Jealous')}
          >
            😒
          </button>
          <button
            className={`mood-option ${
              mood === 'Confused' ? 'selected' : ''
            }`}
            onClick={() => handleMoodSelect('Confused')}
          >
            😕
          </button>
        </div>
      </div>
      <div className="notes">
        <h3>Additional Notes:</h3>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="Enter any notes or comments"
        ></textarea>
        <br />
      </div>
      {mood && (
        <button className="submit-button" onClick={handleEntrySubmit}>
          Submit
        </button>
      )}
      <div className="mood-history">
        <h2>Mood History</h2>
        {moodEntries.map((entry) => (
          <div className="mood-entry" key={entry.timestamp}>
            {entry.mood && <p>Mood: {entry.mood}</p>}
            {entry.notes && <p>Notes: {entry.notes}</p>}
            <p>Timestamp: {entry.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MoodTracker;
