import React from 'react';
import './Navbar.css'

function Navbar() {

    const handlePhotosClick = (e) => {
        e.preventDefault(); 
        alert('Photos section will be added soon');
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav className='navbar'>
            <h2 onClick={scrollToTop}>Vasco</h2>
            <div className="navbar-links">
                <a href="#about">About Me</a>
                <a href="#photos" onClick={handlePhotosClick}>Photos</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navbar;