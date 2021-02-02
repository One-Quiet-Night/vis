import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../Assets/OQN.pdf';

import ReactGA from 'react-ga';

const Nav = () => {

    const clickHandler = (name, nav) => {
        ReactGA.event({
            category: name,
            action: `${nav} clicked.`
          });
    };

    return (
        <header className="App-header">
            <Link to="/vis"><h2 style={{color: "white"}}>One Quiet Night</h2></Link>
            <div className="nav-right">
                <Link to="/forecast"><p onClick={() => clickHandler('/Forecast', 'Forecast')}>Forecast</p></Link>
                <Link to="/about"><p onClick={() => clickHandler('/About', 'About')}>About</p></Link>
                <a style={{paddingRight: 0, textDecoration: "underline"}} href={pdf} target="_blank" rel="noreferrer" onClick={() => clickHandler('/Model', 'Model - Research paper')}><p>Our Model</p></a>
            </div>
        </header>

    );
}

export default Nav;