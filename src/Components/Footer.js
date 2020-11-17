import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/"><h2>One Quiet Night</h2></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/model"><p>Our Model</p></Link>
            <Link to ="/contact-us"><p>Contact Us</p></Link>
            <p className="small-text">© 2020 One Quiet Night. All Rights Reserved.</p>
      </footer>
    );
}

export default Footer;