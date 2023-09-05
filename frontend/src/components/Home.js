import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Bike Service</h1>
        <p className="lead">
          We provide top-notch bike maintenance and repair services to keep your bike in great condition.
        </p>
        <hr className="my-4" />
        <p>Book our services today and ensure your bike runs smoothly!</p>
        <a className="btn btn-primary btn-lg" href="/services" role="button">Explore Services</a>
      </div>
    </div>
  );
}

export default Home;
