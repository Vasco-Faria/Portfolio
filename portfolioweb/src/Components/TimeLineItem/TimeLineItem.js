import React from 'react';
import './TimeLineItem.css';

const TimelineItem = ({ year, content }) => {
  return (
    <li>
      <div>
        <time>{year}</time> 
        {content}
      </div>
    </li>
  );
};

export default TimelineItem;
