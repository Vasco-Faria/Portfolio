import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    
    setIsVisible(scrollY > window.innerHeight * 0.5);
  };

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
        <Link activeClass="active" smooth spy to="Snow Container">
            Back to Top
        </Link>
        </div>
    );
}

export default BackToTop;
