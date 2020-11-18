import React from 'react';
import logo from './../Assets/one-quiet-night-logo.jpg';
import areum from './../Assets/areum-jo.jpg';
import jae from './../Assets/jae-cho.jpg';

import { FaGithub, FaLinkedin, FaLaptop } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container" style={{ paddingTop: "30px"}}>
            <p className="profile-name" style={{ fontSize: "30px"}}>Meet our team</p>
            <p className="profile-name"><code>One Quiet Night</code></p>
            <div className="vis-wrapper" style={{ justifyContent: "center", maxWidth: "800px", margin: "70px auto"}}>
                <div>
                    <img className="logo-img" src={logo} alt="one quiet night logo from pandemic" />
                    <p style={{ fontSize: "12px" }}>ONE-QUIET-Night special card from <a style={{ color: "#EE3E23", textDecoration: "underline" }} target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Pandemic_(board_game)">pandemic</a></p>
                </div>
                <div className="text-height" style={{ margin: "30px 0 0 30px", textAlign: "left"}}>
                    <p><code>One Quiet Night</code> wants to build data-driven models to forecast potential outbreaks and on understanding its driving forces.</p>
                    <p>We develop a methodology that augments scientific models with machine-learnable structures. Our models use temporal and spatial features of the daily case reports and movement trends data to accurately predict future COVID-19 cases. Our forecast based on these models achieves state-of-the-art accuracies.</p>
                </div>
            </div>
                  
            <div className="about" style={{marginTop: "70px"}}>
                <div>
                    <p className="profile-name">Areum Jo, Ph.D.<br/> <span className="profile-title">Data engineer and team lead</span></p>
                    <img src={areum} className="profile" alt="Areum profile" />
                    <p className="text-height" style={{maxWidth: "550px"}}>Areum creates thoughtful web applications using the newest technologies to help and inspire people. She has worked in a handful of institutes as a neuroscientist to research the brain-imaging methods and the brain-computer interfaces. She is passionate about combining her skills from neuroscience with web UI/UX technologies to solve complex problems at scale. She holds a Ph. D. in neuroscience from SungKyunKwan University, South Korea.</p>
                    <div className="about">
                        <a href="https://github.com/areumjo" target="_blank" rel="noreferrer"><FaGithub size={30} color="#699FD4"/> </a>
                        <a href="https://www.linkedin.com/in/areum-jo/" target="_blank" rel="noreferrer"><FaLinkedin size={30} color="#699FD4"/></a>
                        <a href="https://areumjo.com" target="_blank" rel="noreferrer"><FaLaptop size={30} color="#699FD4"/></a>
                    </div>
                </div>
                <div>
                    <p className="profile-name">Jae Cho, Ph.D.<br/> <span className="profile-title">Data scientist</span></p>
                    <img src={jae} className="profile" alt="Jae profile" />
                    <p className="text-height" style={{maxWidth: "550px"}}>Jae joined Zillow in September 2019 to produce forecasts using mathematical and statistical methods. He builds data-driven models that use economic, demographic, and social data to make predictions about changes in the housing market. The outputs of his models are used to solve business problems inside and outside of Zillow. Prior to Zillow, he has worked in a quantitative hedge fund and in a national lab. He holds a Ph. D. in chemical engineering from Massachusetts Institute of Technology.</p>
                    <div className="about">
                        <a href="https://github.com/xjhc" target="_blank" rel="noreferrer"><FaGithub size={30} color="#699FD4"/></a>
                        <a href="https://www.linkedin.com/in/jae-cho/" target="_blank" rel="noreferrer"><FaLinkedin size={30} color="#699FD4"/></a>
                        <a href="https://www.linkedin.com/in/jae-cho/" target="_blank" rel="noreferrer"><FaLaptop size={30} color="#699FD4"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;