import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import ServiceBookingForm from './components/Service Booking form/ServiceBookingForm';
import CustomerDashboard from './components/Customer Dashboard/CustomerDashboard';
import OwnerDashboard from './components/Owner Dashboard/OwnerDashboard';
import RegistrationForm from './components/Register/RegistrationForm';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/servicebookingform" exact component={ServiceBookingForm} />
          <Route path="/customer-dashboard" component={CustomerDashboard} />
          <Route path="/owner-dashboard" component={OwnerDashboard} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/bookings" component={Booking} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
