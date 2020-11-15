import React from 'react';
import logo from './../Assets/one-quiet-night-logo.jpg';

const About = () => {
    return (
        <div className="container">
            <h2>Who are we?</h2>
            <img className="logo-img" src={logo} alt="one quiet night logo from pandemic" />
            <h2>Team <code>One Quiet Night</code></h2>
        </div>
    )
};

export default About;