import React from 'react';

function CustomerDashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          {/* Sidebar */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer Dashboard</h5>
              {/* Add navigation links or additional customer information here */}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {/* Main Content */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Bookings</h5>
              {/* Display a list of customer's bookings here */}
              <ul className="list-group">
                <li className="list-group-item">Booking 1: Service Name, Date</li>
                <li className="list-group-item">Booking 2: Service Name, Date</li>
                {/* Add more booking items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
