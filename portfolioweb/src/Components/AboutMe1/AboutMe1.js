import React from 'react';
import AboutImage from '../AboutImage/AboutImage';
import './AboutMe1.css';

function AboutMe1() {
    return (
        <>
            <div className='about-left'>
                <AboutImage/>
                </div>
                <div className='about-right'>
                <div className='description'>
                        <div className='name'>
                            <p>Name:</p>
                            <p> Vasco Miguel Fernandes Faria</p>
                        </div>
                        <div className='age'>
                            <p>Age:</p>
                            <p>20</p>
                        </div>
                        <div className='hometown'>
                            <p>Hometown:</p>
                            <p>Viana do Castelo, Portugal</p>
                        </div>
                        <div className='principles'>
                            <p>Principles:</p>
                            <p>Resilience, Continuous Learning, Family Focus</p>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default AboutMe1;
