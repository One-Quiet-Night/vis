import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../Assets/one-quiet-night-logo.jpg';

const Home = () => {
    return (
        <div className="home container">
            <p>We just want <code>One-Quiet-Night</code>.</p>
            <img className="logo-img" src={logo} alt="one quiet night logo from pandemic" />
            <p>How dangerous am I to go out tonight?</p>
            <Link to="/forecast"><button>Explore the data</button></Link>
        </div>
    )
}
// button links to the page with US total map and chart >> will have separate buttons for `state-data`, `county-data`
export default Home;