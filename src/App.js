import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Components/Nav';
// import Footer from './Components/Footer';

import About from './Components/About';
import PageNotFound from './Components/PageNotFound';

import Forecast from './Components/Forecast';
import Model from './Components/Model';

import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-184785449-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.pageview('/');
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/vis" component={Forecast} />
        <Route path="/about" component={About} />
        <Route path="/model" component={Model} />
        <Route path="/forecast" component={Forecast} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
