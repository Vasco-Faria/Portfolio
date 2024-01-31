import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import Navbar from './Sections/Navbar/Navbar';
import Home from './Sections/Home/Home';
import AboutMe from './Sections/AboutMe/AboutMe';
import Timeline from './Sections/Timeline/Timeline';
import PopUp from './Components/PopUp/PopUp';
import Projects from './Sections/Projects/Projects';
import ContactMe from './Sections/ContactMe/ContactMe';
import BackToTop from './Components/BackToTop/BackToTop';

function App() {


  return (
    <div className="App">
      <BackToTop/>
      <PopUp/>
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
