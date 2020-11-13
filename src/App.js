import React, { useState } from 'react';
import './App.css';

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
      <header className="App-header">
        <h2>One quiet night</h2>
      </header>
      <div className="map">
        <BasicMap />
        <MarkerMap />
        <TooltipMap setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <UsMap />
        <QuantileUSMAP setTooltipContent={setContent} />
    </div>
    </div>

  );
}

export default App;
