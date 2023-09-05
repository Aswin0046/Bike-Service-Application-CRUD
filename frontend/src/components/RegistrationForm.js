import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [userData, setUserData] = useState({
    email: '',
    mobileNumber: '',
    password: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Send a POST request to the backend to register the user
    axios.post('/api/register', userData)
      .then((response) => {
        setRegistrationStatus('Registration successful. You can now log in.');
        // You can also redirect the user to the login page
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        setRegistrationStatus('Registration failed. Please try again.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>User Registration</h2>
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
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={userData.mobileNumber}
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
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        {registrationStatus && (
          <p>{registrationStatus}</p>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
