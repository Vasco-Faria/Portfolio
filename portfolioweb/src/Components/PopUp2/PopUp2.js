import React from 'react';
import './PopUp2.css';

const PopUp2 = ({ isVisible, onClose }) => {
  const handleModalClose = () => {
    const popup = document.querySelector('.popup2');
    if (popup) {
      popup.style.animation = 'slideOut 0.5s forwards';
    }

    setTimeout(() => {
      onClose(); 
    }, 500);
  };

  return isVisible ? (
    <div className={`popup2 ${window.innerWidth < 1300 ? 'overlay' : ''}`}>
      <button className="close" onClick={handleModalClose}>
        &times;
      </button>
      <iframe
        style={{ borderRadius: '12px',zIndex:999,marginTop:"3rem" }}
        src="https://open.spotify.com/embed/track/40MXr7BMh3ShPf2b9giSRt?utm_source=generator&theme=0"
        width="70%"
        height="200"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  ) : null;
};

export default PopUp2;
