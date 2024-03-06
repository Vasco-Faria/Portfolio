import React, { useEffect, useState } from 'react';
import './PopUp.css';

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 7000);
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
    <div className={`popup ${window.innerWidth < 1300 ? 'overlay' : ''}`}>
      <h2>Quote of the day</h2>
      <button className="close" onClick={handleModalClose}>
        &times;
      </button>
      <div className="content">
        <p className='popup-content'>"Life is very short and anxious for those who forget the past, neglect the present, and fear the future."</p>
        <p className='popup-author'>- Seneca </p>
      </div>
    </div>
  ) : null;
};

export default PopUp;
