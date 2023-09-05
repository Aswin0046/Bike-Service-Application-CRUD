import React, { useState } from 'react';

function Booking() {
  // Initialize state for the booking form
  const [formData, setFormData] = useState({
    service: '',
    date: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle the booking submission (e.g., send data to the server)
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="service">Select a Service:</label>
          <select
            id="service"
            name="service"
            className="form-control"
            value={formData.service}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a service</option>
            <option value="General Service Check-up">General Service Check-up</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Water Wash">Water Wash</option>
            {/* Add more service options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select a Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
