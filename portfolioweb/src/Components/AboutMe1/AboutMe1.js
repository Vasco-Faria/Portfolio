import React from 'react';
import AboutImage from '../AboutImage/AboutImage';
import './AboutMe1.css';
import img1 from '../../Assets/IMG_0519.jpg';
import img2 from '../../Assets/Vasco.jpeg';

function AboutMe1({ currently, name, age, hometown, principles, university, fluentIn, hobbies, imageUrl }) {
    return (
        <>
            <div className='about-left'>
                <AboutImage imageUrl={imageUrl} />
            </div>
            <div className='about-right'>
                <div className='description'>
                    <div className='name'>
                        <p>{currently ? 'Currently:' : 'Name:'}</p>
                        <p>{currently ? currently : name}</p>
                    </div>
                    <div className='age'>
                        <p>{currently ? 'University:' : 'Age:'}</p>
                        <p>{currently ? university : age}</p>
                    </div>
                    <div className='hometown'>
                        <p>{currently ? 'Fluent In:' : 'Hometown:'}</p>
                        <p>{currently ? fluentIn : hometown}</p>
                    </div>
                    <div className='principles'>
                        <p>{currently ? 'Hobbies:' : 'Principles:'}</p>
                        <p style={{ fontSize: currently ? '1.4rem' : 'inherit' }}>{currently ? hobbies : principles}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe1;
