import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import MoodTracker from './components/MoodTracker';
import StressManagement from './components/StressManagement';

import Community from './components/Community';
import Resources from './components/Resources';
import MentalHealthAssessment from './components/MentalHealthAssessment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moodtracker" element={<MoodTracker />} />
        <Route path="/stressmanagement" element={<StressManagement />} />

        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/assessment" element={<MentalHealthAssessment />} />
      </Routes>
    </Router>
  );
};

export default App;
