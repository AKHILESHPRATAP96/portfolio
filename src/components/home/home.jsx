import React from 'react'
import logoPort from '../assets/logoimg.png'
import "../home/home.css"
import { useTypewriter,Cursor } from 'react-simple-typewriter'
function Home() {
  const [text]=useTypewriter({
    words:['Web Developer','MERN stack Developer'],loop:{}
  })
  return (
    <div class="container-fluid  text-center intro" >
  <div class="row">
    <div class="col-5  d-flex flex-column justify-content-center align-item-start">
      <h1 className='hello'>Hello</h1>
      <h1>I'm Akhilesh Pratap,</h1>
      <h1>Full Stack </h1>
      <h1>{text}<Cursor/></h1>
      
      
    </div>
    
    <div class="col-sm-7  logoimg">
    <img src={logoPort} height={400} width={500}/>
    </div>
  </div>
</div>)
}

export default Home