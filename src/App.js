import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';

import About from './Components/About';
import PageNotFound from './Components/PageNotFound';
import Docs from './Components/Docs';
import C3 from './Components/C3';


import ReactTooltip from 'react-tooltip';
import TooltipMap from './Maps/TooltipMap';
import UsMap from './Maps/UsMap';
import BasicMap from './Maps/BasicMap';
import MarkerMap from './Maps/MarkerMap';
import QuantileUSMAP from './Maps/QuantileUSMap';
import Forecast from './Components/Forecast';


function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/docs" component={Docs} />
        <Route path="/c3-ai-challenge" component={C3} />
        <Route path="/forecast" component={Forecast} />
        <Route component={PageNotFound} />
      </Switch>
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
