import React, { useState } from 'react';
import './StressManagement.css';
import { Link } from 'react-router-dom';
import Breathing from '../assets/Breathing.png';
import PMR from '../assets/PMR.png';
import Exercise from '../assets/Exercise.png';
import Music from '../assets/Music.png';

const StressManagement = () => {
  const recommendationCategories = [
    { category: 'Deep Breathing', weight: 0.6 },
    { category: 'Mindfulness', weight: 0.8 },
    { category: 'Physical Exercise', weight: 0.4 },
  ];

  const [userData, setUserData] = useState({
    stressLevel: 5, // Default stress level
    preferredTechniques: [], // Default preferred techniques
    triggers: [], // Default triggers
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateRecommendations = (userData, recommendationCategories) => {
    const recommendations = [];

    const weightSum = recommendationCategories.reduce((sum, category) => sum + category.weight, 0);

    recommendationCategories.forEach((category) => {
      const categoryWeight = category.weight / weightSum;
      let categoryRecommendations = [];

      if (category.category === 'Deep Breathing') {
        if (userData.stressLevel >= 5) {
          categoryRecommendations.push('Guided deep breathing exercises for relaxation');
        }
      } else if (category.category === 'Mindfulness') {
        if (userData.preferredTechniques.includes('mindfulness')) {
          categoryRecommendations.push('Mindful breathing exercises to reduce stress');
        }
      } else if (category.category === 'Physical Exercise') {
        if (userData.triggers.includes('traffic')) {
          categoryRecommendations.push('Morning walk or bike ride to relieve stress before work');
        }
      }
      
      categoryRecommendations = categoryRecommendations.map((rec) => ({
        recommendation: rec,
        weight: categoryWeight,
      }));
      recommendations.push(...categoryRecommendations);
    });

    recommendations.sort((rec1, rec2) => rec2.weight - rec1.weight);

    return recommendations.map((rec) => rec.recommendation);
  };

  const handleGenerateRecommendations = () => {
    const generatedRecommendations = generateRecommendations(userData, recommendationCategories);
    setRecommendations(generatedRecommendations);
  };

  return (
    <>
    <div className="navbar">
        <h1 className="navbar-logo">Serenova</h1>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/Login" className="navbar-link">Login</Link>
            <Link to ="/MoodTracker" className="navbar-link">Mood Tracker</Link>
            <Link to ="/Community" className="navbar-link">Community</Link>
            <Link to ="/Resources" className="navbar-link">Resources</Link>
            <Link to ="/Assessments" className="navbar-link">Assessments</Link>
        </div>
    </div>
    <div className="stress-management">
      <h2>Stress Management</h2>

      <div className="input-section">
        <label htmlFor="stressLevel">Stress Level (1-10): </label>
        <input
          type="number"
          id="stressLevel"
          name="stressLevel"
          min="1"
          max="10"
          value={userData.stressLevel}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="preferredTechniques">Preferred Techniques: </label>
        <input
          type="text"
          id="preferredTechniques"
          name="preferredTechniques"
          value={userData.preferredTechniques}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="triggers">Triggers: </label>
        <input
          type="text"
          id="triggers"
          name="triggers"
          value={userData.triggers}
          onChange={handleInputChange}
        />
        <br />
        <br/>
        <button onClick={handleGenerateRecommendations} class="recommendation-button">Generate Recommendations</button>
        <br/>
      </div>

      {recommendations.length > 0 && (
        <div className="blog-post">
          <h2>Personalized Recommendations</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="blog-post">
        <h2>Deep Breathing Exercises</h2>
        <img src={Breathing} alt="Breathing" class="image"/>
        <h3>Box Breathing Technique:</h3>
        <br/>
        <iframe width="560" height="315" class="youtube" src="https://www.youtube.com/embed/3ItY2FedCi8?start=70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/>
<ul>
<li>Inhale slowly and deeply through your nose for a count of 4. </li>
<li>Hold your breath for a count of 4.</li>
<li>Exhale slowly and completely through your mouth for a count of 4.</li>
<li>Hold your breath for a count of 4.</li>
<li>Repeat this cycle for several minutes, focusing on the rhythm and depth of your breath.</li>
</ul>
<h3>4-7-8 Breathing Technique:</h3>
<br/>
<iframe width="560" height="315" class="youtube" src="https://www.youtube.com/embed/kpSkoXRrZnE?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/>
<ul>
<li>Inhale slowly and deeply through your nose to a mental count of 4. </li>
<li>Hold your breath for a count of 7. </li>
<li>Exhale slowly and completely through your mouth to a count of 8. </li>
<li>Repeat this cycle for several minutes, allowing your breath to become even and relaxed.</li>
</ul>
      </div>

      <div className="blog-post">
        <h2>Mindfulness Exercises</h2>
        <img src={Exercise} alt="Exercise" class="image"/>
<h3>Body Scan:</h3>
The body scan is a mindfulness practice that involves systematically bringing attention to different parts of the body, promoting relaxation and body awareness.
<ul>
<li>Find a comfortable position, either sitting or lying down. Close your eyes or lower their gaze.
Bring your attention to your breath, taking a few deep breaths to settle into the present moment.</li>
<li>Shift your attention to the sensations in your body. Starting from the top of the head, slowly move down through each body part, bringing gentle awareness to the sensations present. </li>
<li>Notice any areas of tension, discomfort, or relaxation without judgment or the need to change anything. </li>
<li>As you scan each body part, Observe the physical sensations, such as warmth, tingling, or pressure, and to let go of any tension you may encounter.</li>
<li>Spend a few moments with your attention on each body part before moving on to the next. You can also choose to linger longer on areas that require extra attention.</li>
<li>Conclude the body scan by bringing your attention back to your breath, allowing yourself to experience a sense of grounding and relaxation in their whole body. </li>
</ul>
<h3>Mindful Breathing:</h3>
Mindful breathing is a fundamental mindfulness practice that involves focusing attention on the breath, cultivating awareness and relaxation.
<ul>
<li>
Find a comfortable posture, either sitting or lying down, close your eyes or soften your gaze. </li>
<li>Bring your attention to the natural flow of your breath. Notice the sensations of the breath as it enters and leaves your body.</li>
<li>Focus your attention on the sensations of the breath at a specific anchor point, such as the nostrils, chest, or abdomen. Observe the rising and falling sensation with curiosity and without trying to change anything. </li>
<li>Explore the qualities of the breath, such as its temperature, depth, or rhythm, and to observe any sensations or thoughts that arise without getting caught up in them. </li>
<li>Conclude the mindful breathing exercise by taking a few deep breaths and to bring your attention back to your surroundings, opening your eyes when ready. </li>
</ul>
      </div>

      <div className="blog-post">
        <h2>Stress Relief Tools</h2>
        <img src={Music} alt="Music" class="image"/>
        <p>Here are some sounds to release stress:</p>
            <br/> 
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
      </div>

    </div>
    </>
  );
};

export default StressManagement;
