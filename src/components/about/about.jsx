import React from 'react'
import about from '../assets/about.png'
import '../about/about.css'
import {  motion } from "framer-motion"


function About() {
  return (
    <div class="container-fluid  text-center " id="about" >
    <div class="row">
      <div class="col-5  d-flex flex-column justify-content-center align-item-start">
      
      
   
      
      
     
         <motion.div
  whileInView={{x:[100,-50]}}
  transition={{ type: "spring", stiffness: 100 }}
>
        <img src={about}  className='img-fluid' />
        </motion.div>
        
      </div>
      
      <motion.div
      initial={{ opacity: 0,scale:.8 }}
      whileInView={{ opacity: 1 ,scale:1}}
      transition={{duration:1}}
      class="col-sm-7 d-flex flex-column justify-content-center">
        <h2 className='text-warning'>About me</h2>
        <h5>"I'm a Full Stack Web Developer specializing in the MERN stack. My passion lies in 
          crafting seamless web applications. I excel in both front-end and back-end development,
           creating responsive user interfaces and scalable server solutions. With a commitment to
           staying current with industry trends, I deliver modern and innovative web solutions". </h5>
      
      </motion.div>
    </div>
  </div>)



}

export default About