import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import Navbar from './Sections/Navbar/Navbar';
import Home from './Sections/Home/Home';
import AboutMe from './Sections/AboutMe/AboutMe';
import Timeline from './Sections/Timeline/Timeline';
import PopUp from './Components/PopUp/PopUp';

function App() {


  return (
    <div className="App">
      <PopUp/>
      <Navbar/>
      <Home/>
      <AboutMe/>  
      <Timeline/>
    </div>
  );
}

export default App;
