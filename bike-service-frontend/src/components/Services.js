import React, { useState, useEffect } from 'react';

function Services() {
  // Initialize state to store the list of services
  const [services, setServices] = useState([]);

  // Simulated data for services (replace with actual data from your backend)
  const initialServices = [
    {
      id: 1,
      name: 'General Service Check-up',
      description: 'A comprehensive check-up for your bike to ensure it runs smoothly.',
    },
    {
      id: 2,
      name: 'Oil Change',
      description: 'Regular oil change to maintain engine health.',
    },
    {
      id: 3,
      name: 'Water Wash',
      description: 'Thorough cleaning to keep your bike looking great.',
    },
  ];

  // Simulate fetching services data from the backend on component mount
  useEffect(() => {
    // In a real application, you would make an API request to fetch services here
    // For this example, we'll use the initialServices data as if it's fetched from the backend
    setServices(initialServices);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Our Services</h2>
      <ul className="list-group">
        {services.map((service) => (
          <li key={service.id} className="list-group-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
