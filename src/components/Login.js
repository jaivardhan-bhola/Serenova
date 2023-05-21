import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { setLoggedIn, setName } from './Auth';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'Jaivardhan Bhola' && password === 'abc@123') {
      setError('');
      setLoggedIn(true);
      setName('Jaivardhan Bhola');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (

        <>
      <div className="navbar">
      <Link to="/" className="navbar-logo">Serenova</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/Registration" className="navbar-link">Register</Link>
        </div>
      </div>
      <div className="container">
        <form className="registration-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          {error && <p className="error-message">{error}</p>}
          <Link to="/Registration" className="login-link">Don't have an account? Register</Link>
          <br />
          <button type="submit" className="register-button">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
