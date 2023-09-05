import React, { useState } from 'react';

function ServiceBookingForm() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleBooking = () => {
    // Send a POST request to the backend to book the selected service on the selected date
    // Handle the response to set the booking status
    // You can also implement error handling here
  };

  return (
    <div className="container mt-4">
      <h2>Book a Service</h2>
      <div className="form-group">
        <label>Select a Service:</label>
        <select
          className="form-control"
          value={selectedService}
          onChange={handleServiceChange}
        >
          <option value="general-service">General Service Check-up</option>
          <option value="oil-change">Oil Change</option>
          <option value="water-wash">Water Wash</option>
        </select>
      </div>
      <div className="form-group">
        <label>Select a Date:</label>
        <input
          type="date"
          className="form-control"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={handleBooking}
        >
          Book Service
        </button>
      </div>
      {bookingStatus && (
        <div>
          <p>Booking Status: {bookingStatus}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceBookingForm;
