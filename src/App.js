

import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import About from './components/about/about';
import { Helmet } from 'react-helmet';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import ContactForm from './components/contact/contact';





function App() {
  return (<div className="App">
    <Helmet><title>Akhilesh Portfolio</title></Helmet>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <ContactForm/>
   
    </div>
  );
}

export default App;
