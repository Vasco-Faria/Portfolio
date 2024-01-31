import React from 'react';
import './ContactMe.css';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VascoImg from '../../Assets/Vasco.jpeg';



const ContactMe = () => {

    const openLink = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div id="ContactMe" className='ContactMe-section'>
            <h2>Contact Me</h2>
            <div className='contactme'>
                <div className="first-column"> 
                    <div className='image-and-name'>
                    <div className="image-container">
                        <img src={VascoImg} alt="Vasco Faria" className="profile-image" />
                    </div>
                        <h3>Vasco Faria</h3>
                    </div>
                    <div className='mycvs'> 
                        <h3>My cvs</h3>
                        <p>Last Update 26/11/2023</p>
                        <div className='buttons-downloads'>
                            <button>CV PT</button>
                            <button>CV EN</button>
                        </div>
                    </div>
                    <div className='contact-footer'>
                        
                    </div>
                </div>
                <div className="second-column"> 
                    <h3>My socials:</h3>
                    <ul>
                        <li style={{ "--color": "blue" }}
                        onClick={() => openLink('https://www.linkedin.com/in/vasco-faria05/')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </li>

                            <li style={{ "--color": "black" }}
                            onClick={() => openLink('https://github.com/Vasco-Faria')}>
                                <FontAwesomeIcon icon={faGithub} />
                            </li>

                            <li style={{ "--color": "blue" }}
                            onClick={() => openLink('https://www.facebook.com/vasco.miguel.1428/')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li style={{ "--color": "red" }}
                            onClick={() => openLink('https://www.instagram.com/vasco.faria09/')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
