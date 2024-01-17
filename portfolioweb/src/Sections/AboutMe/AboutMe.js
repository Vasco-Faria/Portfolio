import React, {useState,useEffect} from  'react';
import './AboutMe.css';
import AboutMe1 from '../../Components/AboutMe1/AboutMe1';
import AboutMe2 from '../../Components/AboutMe2/AboutMe2';
import { useInView } from 'react-intersection-observer';


const AboutMe = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
        root: null,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div id="AboutMe" ref={ref} className={`AboutMe-Section ${isVisible ? 'fade-in' : ''}`}>
            <h2>About Me</h2>
            <div className='about'>
                <AboutMe1/>
                <AboutMe2/>
            </div>
        </div>
    );
};

export default AboutMe;
