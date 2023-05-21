import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { setLoggedIn, setName as SetAuthName} from './Auth';

const Registration = () => {
  let [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    name = userData.name;
    setLoggedIn(true);
    SetAuthName(name);
    navigate('/');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <>
      <div className="navbar">
      <Link to="/" className="navbar-logo">Serenova</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/login" className="navbar-link">Login</Link>
        </div>
      </div>
      <div className="container">
        <form className="registration-form" onSubmit={handleRegistration}>
          <h1>Create an Account</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <Link to="/login" className="login-link">Already have an account? Login</Link>
          <br />
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
