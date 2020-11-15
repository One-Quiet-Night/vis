import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header className="App-header">
            <Link to="/"><h2 style={{color: "white"}}>One Quiet Night</h2></Link>
            <div className="nav-right">
                <Link to="/forecast"><p>Forecast</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/docs"><p>Doc</p></Link>
                <Link to="c3-ai-challenge"><p>C3 AI COVID-19 Challenge</p></Link>
            </div>
        </header>

    );
}

export default Nav;