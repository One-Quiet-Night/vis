import React from 'react';
import logo from './../Assets/one-quiet-night-logo.jpg';

const About = () => {
    return (
        <div className="container">
            <h2>Who are we?</h2>
            <p>We are <code>One Quiet Night</code> hoping we have one-quiet-night from COVID-19.</p>
            <img className="logo-img" src={logo} alt="one quiet night logo from pandemic" />
        </div>
    )
};

export default About;