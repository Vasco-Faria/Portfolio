import React, {useState,useEffect} from  'react';
import './AboutMe.css';
import AboutMe1 from '../../Components/AboutMe1/AboutMe1';
import img1 from '../../Assets/IMG_0519.jpg';
import img2 from '../../Assets/Vasco.jpeg';
import { useInView } from 'react-intersection-observer';


const AboutMe = () => {

    const [showAboutMe1,setShowAboutMe1] = useState(true);
    const [showAboutMe2,setShowAboutMe2] = useState(false)
    const [buttonText, setButtonText] = useState('1/2');
    const [isVisible, setIsVisible] = useState(false);
    const [setAnimationClass] = useState('slide-in');


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


    const aboutMe1Props1 = {
        name: "Vasco Miguel Fernandes Faria",
        age: "20",
        hometown: "Viana do Castelo, Portugal",
        principles: "Resilience, Continuous Learning, Family Focus",
        imageUrl: img1
    };

    const aboutMe1Props2 = {
        currently: "Studying Computer Science Engineering BSc Degree",
        university: "Aveiro University",
        fluentIn: "Portuguese, English, Spanish, French",
        hobbies: "Gym, Football",
        imageUrl: img2
    };




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
                {showAboutMe1 && <AboutMe1 {...(showAboutMe2 ? aboutMe1Props2 : aboutMe1Props1)} />}
            </div>
            <div className={`about ${showAboutMe2 ? 'slide-in' : 'slide-out'}`}>
                {showAboutMe2 && <AboutMe1 {...aboutMe1Props2} />}
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
