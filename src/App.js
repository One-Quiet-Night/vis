import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Components/Nav';
import Footer from './Components/Footer';

import About from './Components/About';
import PageNotFound from './Components/PageNotFound';

import Forecast from './Components/Forecast';
import Model from './Components/Model';


function App() {
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
      <Footer />
    </div>
  );
}

export default App;
