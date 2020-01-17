import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import axios from "axios";

import Library from './Components/Librarycarethings';
// import NavBar from './Components/Shared/NavBar';
import Home from './Components/Home';
import Media from './Components/Media-Events';
import Pagenotfound from './Components/Pagenotfound';
import About from './Components/About';
import Getinvolved from './Components/Get-Involved';


function App() {
  return (<div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/libraryofcarethings" component={Library} />
        <Route path="/media-events" component={Media} />
        <Route path="/get-involved" component={Getinvolved} />
        <Route path="/pagenotfound" component={Pagenotfound} />
      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default App;