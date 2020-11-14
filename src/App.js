import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';

import ReactTooltip from 'react-tooltip';
import TooltipMap from './Maps/TooltipMap';
import UsMap from './Maps/UsMap';
import BasicMap from './Maps/BasicMap';
import MarkerMap from './Maps/MarkerMap';
import QuantileUSMAP from './Maps/QuantileUSMap';



function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
      {/* <div className="map">
        <BasicMap />
        <MarkerMap />
        <TooltipMap setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <UsMap />
        <QuantileUSMAP setTooltipContent={setContent} />
      </div> */}
    </div>

  );
}

export default App;
