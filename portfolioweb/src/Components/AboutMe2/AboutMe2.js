import React from 'react';
import AboutImage from '../AboutImage/AboutImage';
import img2 from '../../Assets/Vasco.jpeg'
function AboutMe2() {
    

    return (
        <>
         <div className='about-left'>
                <AboutImage imageUrl={img2}/>
                </div>
                <div className='about-right'>
                <div className='description'>
                        <div className='name'>
                            <p>Currently:</p>
                            <p>Studying Computer Science Engineering BSc Degree</p>
                        </div>
                        <div className='age'>
                            <p>University:</p>
                            <p>Aveiro University</p>
                        </div>
                        <div className='hometown'>
                            <p>Fluent in:</p>
                            <p>Portuguese, English, Spanish, French</p>
                        </div>
                        <div className='principles' style={{"fontSi ze":"1.4rem"}}>
                            <p>Hobbies:</p>
                            <p>Gym, Football</p>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default AboutMe2;
