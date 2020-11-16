import React from 'react';
import logo from './../Assets/one-quiet-night-logo.jpg';
import areum from './../Assets/areum-jo.jpg';
import jae from './../Assets/jae-cho.jpg';

const About = () => {
    return (
        <div className="container">
            <h2>Who are we?</h2>
            <img className="logo-img" src={logo} alt="one quiet night logo from pandemic" />
            <h2>Team <code>One Quiet Night</code></h2>
            <div className="about">
                <div>
                    <h3>Areum Jo, Ph.D, team lead and data engineer</h3>
                    <img src={areum} className="profile" />
                    <p className="text-height">sdfsdf</p>
                </div>
                <div>
                    <h3>Jae Cho, Ph.D, data scientist</h3>
                    <img src={jae} className="profile" />
                    <p className="text-height">Jae joined Zillow in September 2019 to produce forecasts using mathematical and statistical methods. He builds data-driven models that use economic, demographic, and social data to make predictions about changes in the housing market. The outputs of his models are used to solve business problems inside and outside of Zillow. Prior to Zillow, he has worked in a quantitative hedge fund and in a national lab. He holds a Ph. D. in chemical engineering from Massachusetts Institute of Technology.</p>
                </div>
            </div>
        </div>
    )
};

export default About;