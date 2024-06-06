import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import { Helmet } from "react-helmet";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactForm from "./components/contact/contact";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion"

function App() {
  return (
  
      <Container fluid className="App" id="cont"
      >
    <motion.div
    initial={{ opacity: 0.2 ,color:"blue"}}
    whileInView={{ opacity: 1,scale:1 }}
    transition={{duration:2.5}}
    >
    <Navbar />
    </motion.div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
   
    </Container>
  
  );
}

export default App;
