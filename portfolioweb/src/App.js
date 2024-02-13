
import './App.css';
import React from 'react';
import Navbar from './Sections/Navbar/Navbar';
import Home from './Sections/Home/Home';
import AboutMe from './Sections/AboutMe/AboutMe';
import Timeline from './Sections/Timeline/Timeline';
import Projects from './Sections/Projects/Projects';
import ContactMe from './Sections/ContactMe/ContactMe';
import BackToTop from './Components/BackToTop/BackToTop';

function App() {


  return (
    <div className="App">
      <BackToTop/>
      <Navbar/>
      <Home/>
      <AboutMe/>  
      <Timeline/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
