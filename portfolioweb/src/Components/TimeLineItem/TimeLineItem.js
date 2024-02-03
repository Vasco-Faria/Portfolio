import React from 'react';
import './TimeLineItem.css';

const TimelineItem = ({ year, content,logo }) => {
  return (
    <li className='li'>
      <div>
        <section className='header-timeitem'>
          <time>{year}</time> 
          {logo && <img src={logo} alt='' />}
        </section>
        {content}
      </div>
    </li>
  );
};

export default TimelineItem;
