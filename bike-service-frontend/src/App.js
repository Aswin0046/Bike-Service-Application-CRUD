import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import ServiceBookingForm from './components/ServiceBookingForm';
import CustomerDashboard from './components/CustomerDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Services from './components/Services';
import Booking from './components/Booking';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={ServiceBookingForm} />
          <Route path="/customer-dashboard" component={CustomerDashboard} />
          <Route path="/owner-dashboard" component={OwnerDashboard} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/bookings" component={Booking} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
