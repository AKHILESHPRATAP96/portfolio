import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../projects/projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Res from '../assets/projects/resume_builder.jpg'
import you from '../assets/projects/youtube_subscriber.jpg'
import tod from '../assets/projects/todo_list.jpg'
import lis from '../assets/projects/list.jpg'
import flepeo from "../assets/projects/flepeo.png"
import weather from "../assets/projects/weather-app.png"
import { motion } from "framer-motion"

export default function projects() {
  return (
    <Container   className='projCon' id='projects' >
      <motion.div
      initial={{ opacity: 0,scale:.8 }}
      whileInView={{ opacity: 1 ,scale:1}}
      transition={{duration:1.2}}>
      <Row>
        <Col><h1 className='text-center prot fw-bold mb-5 text-warning'>Projects</h1></Col>
      </Row>
      <Row  className='p-3' >
        <Col xs={12} md={6} className=' d-flex justify-content-center align-items-center  '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={weather} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Weather App</Card.Title>
              <Card.Text>
                App Offers real-time weather data using React.js and integrates with a weather API.
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://weather-app-akhi.netlify.app/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/Weather-App' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={flepeo} height={350} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Landing Page</Card.Title>
              <Card.Text>
                Landing page using html css javascript
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://akhilesh-fleapo.netlify.app/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/Fleapo_Assessment' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={Res} height={280} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Resume Builder</Card.Title>
              <Card.Text>
                User-friendly Resume Builder app in React with template selection, data input,
                and seamless resume generation.
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://resumebuilder02.netlify.app/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/Resume_Builder/' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={you} height={280} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Youtube Subscriber</Card.Title>
              <Card.Text>
                YouTube Subscriber app with React.js, Express, MongoDB, Mochawesome for testing, and Nodemon for development.
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://youtubesubscriber-dpdb.onrender.com/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/YOUTUBE_SUBSCRIBERS' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={tod} height={280} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Todo List</Card.Title>
              <Card.Text>
                Responsive Design for  Task Creation and
                description, completion, editing, and deletion capabilities.
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://akhileshpratap96.github.io/todo-list/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/todo-list' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
          <Card className='proj-card' style={{ width: '25rem', height: "30rem" }}>
            <Card.Img variant="top" src={lis} height={280} />
            <Card.Body>
              <Card.Title className='text-center text-bold fs-3 fw-bold'>Tasks</Card.Title>
              <Card.Text>
                Effortlessly create, manage, and customize tasks within a responsive cross-device design.
              </Card.Text>
              <div className='d-flex justify-content-center '>
                <a href='https://akhileshpratap96.github
.io/todo-list/' target='blank'><Button className='mx-1 btn btn-success'   >View Project</Button></a>
                <a href='https://github.com/AKHILESHPRATAP96/todo-list' target='blank'><Button className='mx-1 btn btn-dark'  >Go To GitHub</Button></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </motion.div>



    </Container>
  );
}

