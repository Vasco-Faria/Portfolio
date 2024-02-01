import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1500);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1500);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > window.innerHeight * 0.5);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
      <button onClick={scrollToTop}>
        {isMobile ? <span className='ismobile'>&#8593;</span> : (
          <>
            <span>&#8593;</span>
            <p>Back to</p>
            <p>Top</p>
          </>
        )}
      </button>
    </Link>
  );
}

export default BackToTop;

