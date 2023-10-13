import React from 'react'
import logoPort from '../assets/logoimg.png'
import "../home/home.css"
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { Container,Row,Col } from 'react-bootstrap'
function Home() {
  const [text]=useTypewriter({
    words:['Web Developer','MERN stack Developer'],loop:{}
  })
  return (
  
      <Container fluid style={{marginTop:"70px"}}>
        <Row className='intro'>
          <Col  xs={12} sm={12} md={6} lg={6}>
          <h1 className='hello text-warning '>Hello</h1>
      <h1>I'm Akhilesh Pratap,</h1>
      <h1>Full Stack </h1>
      <h1>{text}<Cursor/></h1>
          
          </Col >
          <Col  xs={10} sm={12} md={6} lg={6} className='imgx'>
          <img src={logoPort} className='img-fluid logoimg ms-5'/>
          </Col>
        </Row>



      </Container>
 )
}

export default Home