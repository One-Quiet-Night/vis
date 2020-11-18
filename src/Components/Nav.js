import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header className="App-header">
            <Link to="/vis"><h2 style={{color: "white"}}>One Quiet Night</h2></Link>
            <div className="nav-right">
                <Link to="/forecast"><p>Forecast</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/model"><p>Our Model</p></Link>
            </div>
        </header>

    );
}

export default Nav;