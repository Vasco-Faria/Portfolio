import React, { useEffect, useState } from 'react';
import './Timeline.css';
import TimelineItem from "../../Components/TimeLineItem/TimeLineItem";


const Timeline = () =>{

    const timelineData = [
        { year: "2003", content: 'I was born on March 9, 2003. We all start from here...' },
        { year: "2018-2021", content: 'Scientific High School Degree' },
        { year: "2021-Currently", content: 'Computer Science Engineering BSc Degree' },
        { year: "Present", content: 'Enjoying each day as if it were the last'}
        
      ];

      const [maxHeight, setMaxHeight] = useState(0);

      useEffect(() => {
        const elH = document.querySelectorAll(".timeline li > div");
        setEqualHeights(elH);
      }, []); 
    
      const setEqualHeights = (el) => {
        let counter = 0;
    
        for (let i = 0; i < el.length; i++) {
          const singleHeight = el[i].offsetHeight;
    
          if (counter < singleHeight) {
            counter = singleHeight;
          }
        }
    
        setMaxHeight(counter);
      };


    return (

        <div id="timeline" className="Timeline-section">
            <h2 className="TimeLine-title">Timeline</h2>

            <section className="timeline">
            <div className="info">
            <img width="50" height="50" src="https://assets.codepen.io/210284/face.svg" alt="" />
                <h2>My background and Experience</h2>
            </div>
            <ol>
                {timelineData.map((item, index) => (
                <TimelineItem key={index} year={item.year} content={item.content} style={{ height: `${maxHeight}px` }} />
                ))}
            </ol>
            </section>
        </div>
    )
}

export default Timeline;