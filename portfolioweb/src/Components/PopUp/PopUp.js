import React, { useEffect, useState } from 'react';
import './PopUp.css';

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

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


  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const lastFetchTime = localStorage.getItem('lastFetchTime');
        const currentTime = new Date().getTime();
        const currentDay = new Date().toLocaleDateString();

        
        if (!lastFetchTime || localStorage.getItem('lastDay') !== currentDay) {
          const response = await fetch('https://api.quotable.io/random');
          if (!response.ok) {
            throw new Error('Failed to fetch quote');
          }
          const data = await response.json();
          setQuote({ content: data.content, author: data.author });

          
          localStorage.setItem('lastFetchTime', currentTime);
          localStorage.setItem('lastDay', currentDay);
          localStorage.setItem('quoteContent', data.content);
          localStorage.setItem('quoteAuthor', data.author);
        } else {
          
          const storedContent = localStorage.getItem('quoteContent');
          const storedAuthor = localStorage.getItem('quoteAuthor');
          if (storedContent && storedAuthor) {
            setQuote({ content: storedContent, author: storedAuthor });
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchQuote();
  }, []);

  return isVisible ? (
    <div className="popup">
      <h2>Quote of the day</h2>
      <a className="close" onClick={handleModalClose}>
        &times;
      </a>
      <div className="content">
      <p className='popup-content'>"{quote.content}"</p>
      <p className='popup-author'>- {quote.author}</p>
      </div>
    </div>
  ) : null;
};

export default PopUp;
