import React, { useState } from 'react';
import './StressManagement.css';
import { Link } from 'react-router-dom';

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
            <Link to="/Login.js" className="navbar-link">Login</Link>
            <Link to ="/MoodTracker" className="navbar-link">Mood Tracker</Link>
            <Link to ="/Recommendations" className="navbar-link">Recommendations</Link>
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
        <p><h3>Box Breathing Technique:</h3>
<ui>
<li>Inhale slowly and deeply through your nose for a count of 4. </li>
<li>Hold your breath for a count of 4.</li>
<li>Exhale slowly and completely through your mouth for a count of 4.</li>
<li>Hold your breath for a count of 4.</li>
<li>Repeat this cycle for several minutes, focusing on the rhythm and depth of your breath.</li>
</ui>
<h3>4-7-8 Breathing Technique:</h3>
<ui>
<li>Inhale slowly and deeply through your nose to a mental count of 4. </li>
<li>Hold your breath for a count of 7. </li>
<li>Exhale slowly and completely through your mouth to a count of 8. </li>
<li>Repeat this cycle for several minutes, allowing your breath to become even and relaxed.</li>
</ui>
<h3>Diaphragmatic Breathing Technique: </h3>
<ui>
<li>Place one hand on your chest and the other on your abdomen. </li>
<li>Take a slow, deep breath in through your nose, allowing your abdomen to rise while keeping your chest still. </li>
<li>Exhale slowly through your mouth, feeling your abdomen lower. </li>
<li>Continue breathing deeply and focusing on the movement of your abdomen. </li>
</ui>
<h3>Counted Breath Technique: </h3>

<li>Inhale slowly and deeply through your nose for a count of 4. </li>
<li>Hold your breath for a count of 2. </li>
<li>Exhale slowly and completely through your mouth for a count of 6. </li>
<li>Repeat this cycle, adjusting the counts to find a comfortable and calming rhythm. </li></p>
      </div>

      <div className="blog-post">
        <h2>Progressive Muscle Relaxation</h2>
        <p>Progressive Muscle Relaxation (PMR) is a relaxation technique that involves tensing and releasing different muscle groups in your body to achieve a state of deep relaxation. Here are step-by-step instructions for practicing Progressive Muscle Relaxation:
<li>Find a comfortable and quiet space where you can relax without distractions. You can sit in a chair or lie down on a comfortable surface, such as a mat or bed. </li>

<li>Close your eyes and take a few slow, deep breaths to help calm your mind and body. </li>

<li>Start with your hands. Clench your fists tightly, squeezing all the muscles in your hands and forearms. Hold the tension for a few seconds, paying attention to the sensation of tightness. </li>

<li>Release the tension in your hands and forearms all at once, allowing your muscles to completely relax. Pay attention to the feeling of relaxation and the contrast between tension and relaxation. </li>

<li>Move on to your biceps and upper arms. Take a deep breath in, and as you exhale, tense your biceps by flexing your muscles. Hold the tension for a few seconds, noticing the sensation of tightness. </li>

<li>Release the tension in your biceps and upper arms, letting the muscles relax completely. Focus on the feeling of relaxation spreading through your arms. </li>

<li>Continue this process, systematically tensing and releasing muscle groups throughout your body. Here's a suggested sequence: </li>
<p>
&emsp;- Shoulders: Raise your shoulders towards your ears, tensing the muscles. Hold for a few seconds, then release and let your shoulders drop, feeling the relaxation. <br />

&emsp;- Face: Scrunch up your face by squeezing your eyes shut, wrinkling your nose, and clenching your jaw. Hold the tension briefly, then release, allowing your face to relax and your features to soften. <br />

&emsp;- Chest and abdomen: Take a deep breath in, filling your lungs and expanding your chest and abdomen. Hold the breath and tension for a few seconds, then exhale and release, letting your breath return to a normal rhythm. <br />

&emsp;- Thighs: Tighten the muscles in your thighs by pressing your knees together and squeezing your leg muscles. Hold the tension for a few seconds, then release, feeling the heaviness and relaxation in your thighs. <br />

&emsp;- Calves and feet: Point your toes downward, tensing the muscles in your calves and feet. Hold the tension for a few seconds, then release, allowing your feet to relax and your toes to uncurl. <br />
<li>After going through the entire sequence, take a few moments to focus on the overall sensation of relaxation in your body. Notice any areas that may still be holding tension and consciously release those muscles. </li>
</p>
<li>Finally, take a few more deep breaths, gradually becoming aware of your surroundings. When you're ready, open your eyes and slowly return to your normal activities. </li>

Practicing Progressive Muscle Relaxation regularly can help you become more aware of muscle tension and promote relaxation throughout your body. As you become familiar with the technique, you can modify and customize the sequence to fit your needs and preferences.</p>
      </div>

      <div className="blog-post">
        <h2>Mindfulness Exercises</h2>
        <p>Integrate mindfulness exercises, such as body scans or mindful breathing, to help users cultivate present-moment awareness, reduce stress, and enhance overall well-being.</p>
      </div>

      <div className="blog-post">
        <h2>Stress Relief Tools</h2>
        <p>Here are some sounds to release stress:</p>
            <br/> 
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
      </div>

    </div>
    </>
  );
};

export default StressManagement;
