import React from 'react';
import './Home.css'
function Home() {
  return (
   <div className='homeMain '> 
    <div className="container ">
      <div className="jumbotron p-5">
        <h1 className="home">Welcome to Bike Service</h1>
        <p className="lead pt-3">
          We provide top-notch bike maintenance and repair services to keep your bike in great condition.
        </p>
        <hr className="my-5" />
        <p>Book our services today and ensure your bike runs smoothly!</p>
        <a className="btn btn-lg homeBtn mt-3" href="/login" role="button">Explore Services</a>
      </div>
    </div>
  </div>
  );
}

export default Home;
