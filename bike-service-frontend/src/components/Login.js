import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Send a POST request to the backend to authenticate the user
    axios.post('/api/login', userData)
      .then((response) => {
        // Handle successful login, e.g., store user token in local storage or state
        // You can also redirect the user to their dashboard
      })
      .catch((error) => {
        console.error('Login failed:', error);
        setLoginStatus('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        {loginStatus && (
          <p className="text-danger">{loginStatus}</p>
        )}
      </form>
    </div>
  );
}

export default Login;
