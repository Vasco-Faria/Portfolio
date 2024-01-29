import React, { useEffect, useState } from 'react';
import './PopUp.css';

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      
      const popup = document.querySelector('.popup');
      if (popup) {
        popup.style.animation = 'slideOut 0.5s forwards';
      }

      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };
  }, []);

  const handleModalClose = () => {
   
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.style.animation = 'slideOut 0.5s forwards';
    }

    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  return isVisible ? (
    <div className="popup">
      <h2>Quote of the day</h2>
      <a className="close" onClick={handleModalClose}>
        &times;
      </a>
      <div className="content">
        Thank you for popping me out of that button, but now I'm done, so you can close this window.
      </div>
    </div>
  ) : null;
};

export default PopUp;
