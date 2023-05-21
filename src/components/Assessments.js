import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Assessments.css';

const Assessments = () => {
  const [stressScores, setStressScores] = useState({
    workStress: 0,
    workLifeBalance: 0,
    workplaceChallenges: 0,
    workload: 0,
  });

  const [wellBeingScores, setWellBeingScores] = useState({
    physicalHealth: 0,
    relationships: 0,
    careerSatisfaction: 0,
    selfEsteem: 0,
  });

  const [resilienceScores, setResilienceScores] = useState({
    responseToChallenges: 0,
    personalStrengths: 0,
    supportSystem: 0,
    copingMechanisms: 0,
  });

  const [stressTestResult, setStressTestResult] = useState('');
  const [wellBeingTestResult, setWellBeingTestResult] = useState('');
  const [resilienceTestResult, setResilienceTestResult] = useState('');

  const handleStressScoreChange = (event, category) => {
    const { value } = event.target;
    setStressScores((prevScores) => ({ ...prevScores, [category]: parseInt(value) }));
  };

  const handleWellBeingScoreChange = (event, category) => {
    const { value } = event.target;
    setWellBeingScores((prevScores) => ({ ...prevScores, [category]: parseInt(value) }));
  };

  const handleResilienceScoreChange = (event, category) => {
    const { value } = event.target;
    setResilienceScores((prevScores) => ({ ...prevScores, [category]: parseInt(value) }));
  };

  const evaluateStressTest = (scores) => {
    const { workStress, workLifeBalance, workplaceChallenges, workload } = scores;
    const averageScore = (workStress + workLifeBalance + workplaceChallenges + workload) / 4;

    let result = '';
    if (averageScore <= 3) {
      result = 'Low stress';
    } else if (averageScore <= 6) {
      result = 'Moderate stress';
    } else {
      result = 'High stress';
    }

    return result;
  };

  const evaluateWellBeingTest = (scores) => {
    const { physicalHealth, relationships, careerSatisfaction, selfEsteem } = scores;
    const averageScore = (physicalHealth + relationships + careerSatisfaction + selfEsteem) / 4;

    let result = '';
    if (averageScore <= 3) {
      result = 'Low well-being';
    } else if (averageScore <= 6) {
      result = 'Moderate well-being';
    } else {
      result = 'High well-being';
    }

    return result;
  };

  const evaluateResilienceTest = (scores) => {
    const { responseToChallenges, personalStrengths, supportSystem, copingMechanisms } = scores;
    const averageScore = (responseToChallenges + personalStrengths + supportSystem + copingMechanisms) / 4;

    let result = '';
    if (averageScore <= 3) {
      result = 'Low resilience';
    } else if (averageScore <= 6) {
      result = 'Moderate resilience';
    } else {
      result = 'High resilience';
    }

    return result;
  };

  const handleStressTestSubmit = (event) => {
    event.preventDefault();
    const stressTestResult = evaluateStressTest(stressScores);
    setStressScores({ workStress: 0, workLifeBalance: 0, workplaceChallenges: 0, workload: 0 });
    setStressTestResult(stressTestResult);
  };

  const handleWellBeingTestSubmit = (event) => {
    event.preventDefault();
    const wellBeingTestResult = evaluateWellBeingTest(wellBeingScores);
    setWellBeingScores({ physicalHealth: 0, relationships: 0, careerSatisfaction: 0, selfEsteem: 0 });
    setWellBeingTestResult(wellBeingTestResult);
  };

  const handleResilienceTestSubmit = (event) => {
    event.preventDefault();
    const resilienceTestResult = evaluateResilienceTest(resilienceScores);
    setResilienceScores({ responseToChallenges: 0, personalStrengths: 0, supportSystem: 0, copingMechanisms: 0 });
    setResilienceTestResult(resilienceTestResult);
  };

  return (
    <>
        <div className="navbar">
        <Link to="/" className="navbar-logo">Serenova</Link>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/Login" className="navbar-link">Login</Link>
            <Link to ="/MoodTracker" className="navbar-link">Mood Tracker</Link>
            <Link to ="/StressManagement" className="navbar-link">Stress Management</Link>
            <Link to ="/Resources" className="navbar-link">Resources</Link>
            <Link to ="/Community" className="navbar-link">Community</Link>
        </div>
        </div>
    <div className="assessments-container">
      <h1>Assessments</h1>
      <br/>
      <form className="test-form" onSubmit={handleStressTestSubmit}>
        <h2>Stress Test</h2>
        <br/>
        <div className="question">
          <label>On a scale of 1 to 10, how stressed do you feel about your job or work responsibilities?</label>
          <input
            type="number"
            min="1"
            max="10"
            value={stressScores.workStress}
            onChange={(event) => handleStressScoreChange(event, 'workStress')}
          />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how satisfied are you with your work-life balance?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={stressScores.workLifeBalance}
                onChange={(event) => handleStressScoreChange(event, 'workLifeBalance')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how challenging do you find your workplace environment?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={stressScores.workplaceChallenges}
                onChange={(event) => handleStressScoreChange(event, 'workplaceChallenges')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how manageable is your workload?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={stressScores.workload}
                onChange={(event) => handleStressScoreChange(event, 'workload')}
            />
        </div>
        <button class="submit-button" type="submit">Submit</button>
        <br />
        {stressTestResult && <p>Stress Test Result: {stressTestResult}</p>}
      </form>
      <br />
      <form className="test-form" onSubmit={handleWellBeingTestSubmit}>
        <h2>Well-being Test</h2>
        <div className="question">
          <label>On a scale of 1 to 10, how satisfied are you with your physical health?</label>
          <input
            type="number"
            min="1"
            max="10"
            value={wellBeingScores.physicalHealth}
            onChange={(event) => handleWellBeingScoreChange(event, 'physicalHealth')}
          />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how satisfied are you with your relationships?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={wellBeingScores.relationships}
                onChange={(event) => handleWellBeingScoreChange(event, 'relationships')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how satisfied are you with your career?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={wellBeingScores.careerSatisfaction}
                onChange={(event) => handleWellBeingScoreChange(event, 'careerSatisfaction')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how satisfied are you with your self-esteem?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={wellBeingScores.selfEsteem}
                onChange={(event) => handleWellBeingScoreChange(event, 'selfEsteem')}
            />
        </div>

        <button class="submit-button" type="submit">Submit</button>
        {wellBeingTestResult && <p>Well-being Test Result: {wellBeingTestResult}</p>}
        <br />
      </form>
        <br />
      <form className="test-form" onSubmit={handleResilienceTestSubmit}>
        <h2>Resilience Test</h2>
        <br/>
        <div className="question">
          <label>On a scale of 1 to 10, how do you typically respond to challenges or setbacks in your life?</label>
          <input
            type="number"
            min="1"
            max="10"
            value={resilienceScores.responseToChallenges}
            onChange={(event) => handleResilienceScoreChange(event, 'responseToChallenges')}
          />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how would you rate your personal strengths?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={resilienceScores.personalStrengths}
                onChange={(event) => handleResilienceScoreChange(event, 'personalStrengths')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how would you rate your support system?</label>   
            <input
                type="number"

                min="1"
                max="10"
                value={resilienceScores.supportSystem}
                onChange={(event) => handleResilienceScoreChange(event, 'supportSystem')}
            />
        </div>
        <div className="question">
            <label>On a scale of 1 to 10, how would you rate your coping mechanisms?</label>
            <input
                type="number"

                min="1"
                max="10"
                value={resilienceScores.copingMechanisms}
                onChange={(event) => handleResilienceScoreChange(event, 'copingMechanisms')}
            />
        </div>
        
        <button class="submit-button" type="submit">Submit</button>
        <br />
        {resilienceTestResult && <p>Resilience Test Result: {resilienceTestResult}</p>}
      </form>
    </div>
    </>
  );
};

export default Assessments;
