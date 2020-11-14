import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header className="App-header">
            <Link to="/"><h2 style={{color: "white"}}>One Quiet Night</h2></Link>
            <div className="nav-right">
                <p>About</p>
                <p>Doc</p>
                <p>C3 AI COVID-19 Challenge</p>
            </div>
        </header>

    );
}

export default Nav;