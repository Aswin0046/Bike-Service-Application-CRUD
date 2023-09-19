import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom';
import './menu.css'
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand text-start" href="#"><FontAwesomeIcon icon={faReact} />ReactJS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-end" id="navbarNav">
      <ul class="navbar-nav ms-auto ">
          <li><a class="nav-link active m-2" aria-current="page"><Link className="td text-dark" to="/">Hello</Link></a></li>
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/card">Card</Link></a></li>
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/superleague">Super league</Link></a></li>
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/socialbutton">Social button</Link></a></li>
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/notification">Notification</Link></a></li>
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/login">Login</Link></a></li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
          <li><a class="nav-link active m-2"><Link className="td text-dark" to="/tech">Technology</Link></a></li>
          <li><a class=" nav-link active m-2"><Link className="td text-dark" to="/json">Display</Link></a></li>
          <li><a class=" nav-link active m-2"><Link className="td text-dark" to="/hooks">Hooks</Link></a></li>
          <li><a class=" nav-link active m-2"><Link className="td text-dark" to="/fruit">Fruit</Link></a></li>
          </ul>
        </li>
          
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}