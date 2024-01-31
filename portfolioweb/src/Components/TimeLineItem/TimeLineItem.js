import React from 'react';
import './TimeLineItem.css';
import AEPJBLogo from '../../Assets/TImelinePhotos/AEPJB.jpeg';

const TimelineItem = ({ year, content,logo }) => {
  return (
    <li className='li'>
      <div>
        <section className='header-timeitem'>
          <time>{year}</time> 
          {logo && <img src={logo} alt='image' />}
        </section>
        {content}
      </div>
    </li>
  );
};

export default TimelineItem;
