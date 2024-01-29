import React, { useEffect, useState } from 'react';
import Snowflake from '../../Assets/SnowFlakes/SnowFlakes';
import HomeTitle from '../../Components/HomeTitle/HomeTitle';
import './Home.css';

const Home = () => {
    const [snowflakes, setSnowflakes] = useState([]);
  
    useEffect(() => {
      const generateSnowflake = () => {
        const left = `${Math.random() * 100}vw`;
        const animationDuration = `${2 + Math.random() * 3}s`;
  
        return { id: Date.now(), component: <Snowflake key={Date.now()} left={left} animationDuration={animationDuration} /> };
      };
  
      const snowflakeInterval = setInterval(() => {
        setSnowflakes((prevSnowflakes) => {
          const newSnowflake = generateSnowflake();
          const updatedSnowflakes = [newSnowflake, ...prevSnowflakes.slice(0, 19)]; 
          return updatedSnowflakes;
        });
      }, 500);
  
      return () => clearInterval(snowflakeInterval);
    }, []);
  
    return (
      <div id="snow-container" className="home-section">
        <HomeTitle />
        <div className="snowflakes">{snowflakes.map((snowflake) => snowflake.component)}</div>
      </div>
    );
  };
  
  export default Home;