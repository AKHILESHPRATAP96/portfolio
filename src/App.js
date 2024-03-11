import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import { Helmet } from "react-helmet";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactForm from "./components/contact/contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="App" id="cont">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </Container>
  );
}

export default App;
