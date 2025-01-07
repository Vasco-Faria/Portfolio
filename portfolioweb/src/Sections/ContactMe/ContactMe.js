import React from 'react';
import './ContactMe.css';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VascoImg from '../../Assets/Vasco.jpeg';
import ButtonDownload from '../../Components/ButtonDownload/ButtonDownload';
import pdf1 from '../../Assets/Cvs/CV-Vasco-PT.pdf';
import pdf2 from '../../Assets/Cvs/CV-Vasco-EN.pdf';
import '@fortawesome/fontawesome-free/css/all.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';




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
                        <p>Last Update 06/01/2025</p>
                        <div className='buttons-downloads'>
                            <ButtonDownload text="CV PT" fileName="CV-Vasco-PT.pdf" filePath={pdf1} />
                            <ButtonDownload text="CV EN" fileName="CV-Vasco-EN.pdf" filePath={pdf2} />
                        </div>
                    </div>
                    <div className='contact-footer'>
                        <div className='email-number-etc'>
                        <div >
                            <FontAwesomeIcon icon={faEnvelope} style={{"color":"white", "marginRight":"1rem"}}/>
                            <p>vascomfaria@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <FontAwesomeIcon icon={faPhone}  style={{"color":"white"}} />
                            <p>+351 926635127</p>
                        </div>
                        </div>
                        <div className='copyright'>
                            <p>2024 Vasco Faria</p>
                            <p>Made with ReactJS</p>
                        </div>
                    </div>
                </div>
                <div className="second-column"> 
                    <h3>My socials:</h3>
                    <ul>
                        <li style={{ "--color": "#0075B5" }}
                        onClick={() => openLink('https://www.linkedin.com/in/vasco-faria05/')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </li>

                            <li style={{ "--color": "black" }}
                            onClick={() => openLink('https://github.com/Vasco-Faria')}>
                                <FontAwesomeIcon icon={faGithub} />
                            </li>

                            <li style={{ "--color": "#4267B2" }}
                            onClick={() => openLink('https://www.facebook.com/vasco.miguel.1428/')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li style={{ "--color": "red" }}
                            onClick={() => openLink('https://www.instagram.com/vasco.faria09/')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </li>
                    </ul>
                </div>
                <div className='copyright2'>
                            <p>2024 Vasco Faria</p>
                            <p>Made with ReactJS</p>
                        </div>
            </div>
        </div>
    );
};

export default ContactMe;
