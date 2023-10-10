import React from 'react'
import about from '../assets/about.png'

function About() {
  return (
    <div class="container-fluid  text-center intro" >
    <div class="row">
      <div class="col-5  d-flex flex-column justify-content-center align-item-start">
        
        <img src={about}/>
        
      </div>
      
      <div class="col-sm-7 d-flex flex-column justify-content-center">
        <h2 style={{color:'yellow'}}>About me</h2>
        <h5>"I'm a Full Stack Web Developer specializing in the MERN stack. My passion lies in 
          crafting seamless web applications. I excel in both front-end and back-end development,
           creating responsive user interfaces and scalable server solutions. With a commitment to
           staying current with industry trends, I deliver modern and innovative web solutions". </h5>
      
      </div>
    </div>
  </div>)
  
}

export default About