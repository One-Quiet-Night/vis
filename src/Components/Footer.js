import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/"><p>One Quiet Night</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/docs"><p>Doc</p></Link>
            <Link to ="/contact-us"><p>Contact Us</p></Link>
            <p>© 2020 One Quiet Night. All Rights Reserved.</p>
      </footer>
    );
}

export default Footer;