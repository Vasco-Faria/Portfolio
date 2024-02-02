import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false); 
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav className='navbar'>
            <h2 onClick={scrollToTop}>Vasco</h2>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link activeClass="active" smooth spy to="AboutMe" onClick={closeMenu}>
                    About Me
                </Link>
                <Link activeClass="active" smooth spy to="timeline" onClick={closeMenu}>
                    Timeline
                </Link>
                <Link activeClass="active" smooth spy to="projects" onClick={closeMenu}>
                    Projects
                </Link>
                <Link activeClass="active" smooth spy to="ContactMe" onClick={closeMenu}>
                    Contact Me
                </Link>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
                <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
                <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
            </div>
        </nav>
    );
}

export default Navbar;
