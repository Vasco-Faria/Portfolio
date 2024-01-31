import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {

  

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <nav className='navbar'>
            <h2 onClick={scrollToTop}>Vasco</h2>
            <div className="navbar-links">
                <Link activeClass="active" smooth spy to="AboutMe">About Me</Link>
                <Link activeClass="active" smooth spy to="timeline">Timeline</Link>
                <Link activeClass="active" smooth spy to="projects">Projects</Link>
                <Link activeClass="active" smooth spy to="ContactMe">ContactMe</Link>
            </div>
        </nav>
    );
}

export default Navbar;
