import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/login.css"

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials match the valid credentials
    if (username === 'demo@coralmango.com' && password === 'demo123') {
      navigation("/table");
    } else {
      // Set error message for invalid credentials
      setErrorMessage('Invalid Credentials!');
    }
  };

  return (
    <div className="login-container">
      <h1>CoralMango Solutions Pvt Ltd -React Assignment</h1>
      <br />
      <h3>Login</h3>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <p>Login Credentials :- Username: demo@coralmango.com , Password: demo123</p>
    </div>

  );
}

export default LoginPage;

