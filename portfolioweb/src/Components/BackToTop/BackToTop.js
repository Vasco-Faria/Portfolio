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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    return (
        <Link className={`back-to-top-button ${isVisible ? 'visible' : ''}`} activeClass="active" smooth spy to="Snow Container">
            <button onClick={scrollToTop}>&#8593; Back to Top</button>
        </Link>
    );
}

export default BackToTop;
