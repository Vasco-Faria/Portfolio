import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import AboutMe1 from '../../Components/AboutMe1/AboutMe1';
import img1 from '../../Assets/IMG_0519.jpg';
import img2 from '../../Assets/Vasco.jpeg';
import PopUp2 from '../../Components/PopUp2/PopUp2';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const [showAboutMe1, setShowAboutMe1] = useState(true);
    const [showAboutMe2, setShowAboutMe2] = useState(false);
    const [buttonText, setButtonText] = useState('1/2');
    const [isVisible, setIsVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState('slide-in');
    const [highlightClass, setHighlightClass] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

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

    // Toggle brightness effect every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightClass(prev => (prev === 'bright' ? '' : 'bright'));
        }, 5000); // every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Handle the click on the "Me" text to show the modal
    const handleHighlightClick = () => {
        if (highlightClass === 'bright') {
            setIsModalOpen(true); // Show modal when "Me" is bright and clicked
        }
    };

    const aboutMe1Props1 = {
        name: "Vasco Miguel Fernandes Faria",
        age: "21",
        hometown: "Viana do Castelo, Portugal",
        principles: "Resilience, Continuous Learning, Family Focus",
        imageUrl: img1
    };

    const aboutMe1Props2 = {
        currently: "Studying Computer Science Engineering MSc Degree",
        university: "Universidade do Minho",
        fluentIn: "Portuguese, English, Spanish, French",
        hobbies: "Running, Gym, Football",
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
            <h2>
                About <span className={`highlight ${highlightClass}`} onClick={handleHighlightClick}>Me</span>
            </h2>
            <div className={`about ${animationClass} ${showAboutMe1 ? 'slide-in' : 'slide-out'}`}>
                {showAboutMe1 && <AboutMe1 {...aboutMe1Props1} />}
            </div>
            <div className={`about ${showAboutMe2 ? 'slide-in' : 'slide-out'}`}>
                {showAboutMe2 && <AboutMe1 {...aboutMe1Props2} />}
            </div>
            <div className='button-change-aboutme'>
                <button className="heartbeat" onClick={handleButtonClick}>
                    {buttonText}
                </button>
            </div>

            <PopUp2 isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default AboutMe;
