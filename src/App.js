import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MoodTracker from './components/MoodTracker';
import StressManagement from './components/StressManagement';
import Community from './components/Community';
import Resources from './components/Resources';
import Assessments from './components/Assessments';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moodtracker" element={<MoodTracker />} />
        <Route path="/stressmanagement" element={<StressManagement />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/Assessments" element={<Assessments />} />
      </Routes>
    </Router>
  );
};

export default App;
