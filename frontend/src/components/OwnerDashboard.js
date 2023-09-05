import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OwnerDashboard() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch owner's services and bookings from the backend API
    axios.get('/api/services')
      .then((servicesResponse) => {
        setServices(servicesResponse.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });

    axios.get('/api/bookings')
      .then((bookingsResponse) => {
        setBookings(bookingsResponse.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const markBookingAsReady = (bookingId) => {
    // Send a PUT request to mark a booking as ready for delivery
    axios.put(`/api/bookings/${bookingId}`, { status: 'ready_for_delivery' })
      .then((response) => {
        // Update the booking status in the local state
        const updatedBookings = bookings.map((booking) => {
          if (booking.id === bookingId) {
            return { ...booking, status: 'ready_for_delivery' };
          }
          return booking;
        });
        setBookings(updatedBookings);
      })
      .catch((error) => {
        console.error('Error marking booking as ready:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Owner Dashboard</h2>
      <div>
        <h3>Your Services</h3>
        <ul className="list-group">
          {services.map((service) => (
            <li key={service.id} className="list-group-item">
              <p>Name: {service.name}</p>
              <p>Description: {service.description}</p>
              <p>Price: ${service.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Bookings</h3>
        <ul className="list-group">
          {bookings.map((booking) => (
            <li key={booking.id} className="list-group-item">
              <p>Service: {booking.serviceName}</p>
              <p>Date: {booking.bookingDate}</p>
              <p>Status: {booking.status}</p>
              {booking.status === 'pending' && (
                <button className="btn btn-primary" onClick={() => markBookingAsReady(booking.id)}>Mark as Ready</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OwnerDashboard;
