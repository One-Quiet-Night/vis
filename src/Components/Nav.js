import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../Assets/oqn-covid-19-forecast.pdf';

const Nav = () => {

    return (
        <header className="App-header">
            <Link to="/vis"><h2 style={{color: "white"}}>One Quiet Night</h2></Link>
            <div className="nav-right">
                <Link to="/forecast"><p>Forecast</p></Link>
                <Link to="/about"><p>About</p></Link>
                <a style={{paddingRight: 0, textDecoration: "underline"}} href={pdf} target="_blank" rel="noreferrer"><p>Our Model</p></a>
            </div>
        </header>

    );
}

export default Nav;