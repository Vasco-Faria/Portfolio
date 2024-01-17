import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {

    const handlePhotosClick = (e) => {
        e.preventDefault(); 
        alert('Timeline section will be added soon');
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav className='navbar'>
            <h2 onClick={scrollToTop}>Vasco</h2>
            <div className="navbar-links">
                <Link activeClass="active" smooth spy to="AboutMe">About Me</Link>
                <a href="#photos" onClick={handlePhotosClick}>Timeline</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navbar;
