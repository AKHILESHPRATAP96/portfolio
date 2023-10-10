import React from 'react'
import navImg from '../assets/navImg.png'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
  <nav id='nav' class="navbar navbar-expand-lg "  >
  <div class="container">
    <a class="navbar-brand" href="#"> <img src={navImg} alt="Portfolio" width="60" height="50"/>
    </a>   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a to='/about' class="nav-link active text-warning text-center" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item ">
          <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#">Skills</a>
        </li>
        <li class="nav-item ">
          <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#">Project</a>
        </li>
        <li class="nav-item ">
          <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#">Contact</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>


  )
}

