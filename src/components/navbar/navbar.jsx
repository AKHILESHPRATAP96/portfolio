import React from 'react'
import navImg from '../assets/logo.png'
import '../navbar/navbar.css'




export default function Navbar() {
  return (
    <nav id='nav' class="navbar navbar-expand-lg fixed-top "  >
      <div class="container">
        <a class="navbar-brand" href="#"> <img src={navImg} alt="Portfolio" width="80" height="60" />
        </a>   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item ">
              <a to='/about' class="nav-link active text-warning text-center" aria-current="page" href="#about">About</a>
            </li>
            <li class="nav-item ">
              <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#skills">Skills</a>
            </li>
            <li class="nav-item ">
              <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#projects">Project</a>
            </li>
            <li class="nav-item ">
              <a to='/' class="nav-link active text-warning text-center" aria-current="page" href="#contact">Contact</a>
            </li>


          </ul>

        </div>
      </div>
    </nav>


  )
}

