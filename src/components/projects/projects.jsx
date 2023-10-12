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

export default function projects() {
  return (
    <Container fluid className='projCon' id='projects'>
  <Row>
    <Col><h1 className='text-center prot fw-bold mb-5 text-warning'>Projects</h1></Col>
  </Row>
      <Row className='mb-5'>
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
        <Card className='proj-card' style={{ width: '25rem',height:"30rem" }}>
      <Card.Img variant="top" src={Res} height={280}/>
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
        <Card className='proj-card'  style={{ width: '25rem',height:"30rem" }}>
      <Card.Img variant="top" src={you} height={280} />
      <Card.Body>
        <Card.Title  className='text-center text-bold fs-3 fw-bold'>Youtube Subscriber</Card.Title>
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
      <Row >
        <Col xs={12} md={6} className=' d-flex justify-content-center '>
        <Card className='proj-card' style={{ width: '25rem',height:"30rem" }}>
      <Card.Img variant="top" src={tod} height={280}/>
      <Card.Body>
        <Card.Title  className='text-center text-bold fs-3 fw-bold'>Todo List</Card.Title>
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
        <Card className='proj-card'  style={{ width: '25rem',height:"30rem" }}>
      <Card.Img variant="top" src={lis} height={280} />
      <Card.Body>
        <Card.Title  className='text-center text-bold fs-3 fw-bold'>Tasks</Card.Title>
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

     
    </Container>
  );
}

