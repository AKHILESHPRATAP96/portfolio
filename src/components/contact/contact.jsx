import { useForm } from 'react-hook-form';
import '../contact/contact.css'
import { Col,Row, Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import insta from '../assets/contact/instagram.svg'
import fac from '../assets/contact/facebook.svg'
import lin from '../assets/contact/linkedin.svg'
import wats from '../assets/contact/whatsapp.svg'
import twi from '../assets/contact/twitter.svg'
import git from '../assets/contact/github.svg'
import { motion } from "framer-motion"

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formRef = useRef();

  const onSubmit = (data) => {
    emailjs.sendForm('service_xfut2i1', 'template_jc8ygxt', formRef.current, '4OiW1r0xKCYIOrK8n')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert('Thank you for contacting')
    console.log(data)
  };

  return (
    <Container fluid className='contact ' id='contact'>
      <motion.div
  whileInView={{x:[100,-50]}}
  transition={{ type: "spring", stiffness: 100 }}
>
        <Row>
            <Col  className='text-center fw-bold mt-5 mb-5 text-warning'><h1>CONTACT ME</h1></Col>
        </Row>
        <Row><div className="form-container formdiv">
      <form ref={formRef}  onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'Invalid email'
              }
            })}
          />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Enter your message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="text-danger">{errors.message.message}</span>}
        </div>
        <div className='btnsub'>
        <button  type="submit">Send</button></div>

      </form>
    </div></Row>
    <Row className=' mt-1 '>
      <Col  className='contactitem'>
      <a href="https://www.instagram.com" target='blank'>
              <img src={insta}
               
              />
            </a>
            </Col>

            <Col  className='contactitem'><a href="https://www.facebook.com" target='blank'>
              <img src={fac}
               
              />
            </a></Col> 

            <Col  className='contactitem'> <a href="https://www.linkedin.com/in/akhileshpratap001//" target='blank'>
              <img src={lin}
               
              />
            </a></Col> 
            <Col  className='contactitem'> <a href="https://web.whatsapp.com" target='blank'>
              <img src={wats}
               
              />
            </a></Col>
            <Col  className='contactitem'> <a href="https://www.twitter.com" target='blank'>
              <img src={twi}
                
                color="info"
              />
            </a></Col> 
            <Col  className='contactitem'> <a href="https://github.com/AKHILESHPRATAP96" target='blank'>
              <img src={git}
              
              />
            </a></Col> 
      
  
    </Row>
    </motion.div>
    </Container>
  );
}
