import React, {useState,useEffect} from  'react';
import './AboutMe.css';
import AboutMe1 from '../../Components/AboutMe1/AboutMe1';
import AboutMe2 from '../../Components/AboutMe2/AboutMe2';
import { useInView } from 'react-intersection-observer';


const AboutMe = () => {

    const [showAboutMe1,setShowAboutMe1] = useState(true);
    const [showAboutMe2,setShowAboutMe2] = useState(false)
    const [buttonText, setButtonText] = useState('1/2');
    const [isVisible, setIsVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState('slide-in');


    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
        root: null,
    });



    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);




    const handleButtonClick = () => {
        setAnimationClass(showAboutMe1 ? 'slide-out' : 'slide-in');
        setShowAboutMe1(!showAboutMe1);
        setShowAboutMe2(!showAboutMe2);
        setButtonText(showAboutMe1 ? '2/2' : '1/2');
        setTimeout(() => {
            setAnimationClass(showAboutMe1 ? 'slide-in' : '');
          }, 1000);
      };


    return (
        <div id="AboutMe" ref={ref} className={`AboutMe-Section ${isVisible ? 'fade-in' : ''}`}>
            <h2>About Me</h2>
            <div className={`about ${showAboutMe1 ? 'slide-in' : 'slide-out'}`}>
                {showAboutMe1 && <AboutMe1 />}
            </div>
            <div className={`about ${showAboutMe2 ? 'slide-in' : 'slide-out'}`}>
                {showAboutMe2 && <AboutMe2 />}
            </div>
            <div className='button-change-aboutme'>
                <button className="heartbeat" onClick={handleButtonClick}>
                {buttonText}
                </button>
            </div>
        </div>
    );
};

export default AboutMe;
