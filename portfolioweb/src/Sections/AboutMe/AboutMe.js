import React from 'react';
import './AboutMe.css';
import AboutImage from '../../Components/AboutImage/AboutImage';

const AboutMe = () => {
    return (
        <div className='AboutMe-Section'>
            <h2>About Me</h2>
            <div className='about'>
                <div className='about-left'>
                    <div className='description'>
                        <div className='name'>
                            <p>Name:</p>
                            <p> Vasco Miguel Fernandes Faria</p>
                        </div>
                        <div className='age'>
                            <p>Age:</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
                <div className='about-right'>
                <AboutImage/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
