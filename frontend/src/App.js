import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import axios from "axios";

import Library from './Components/Librarycarethings';
// import NavBar from './Components/Shared/NavBar';
import Home from './Components/Home';
import Pagenotfound from './Components/Pagenotfound';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (<div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/libraryofcarethings" component={Library} />
        <Route path="/contact" component={Contact} />
        <Route path="/pagenotfound" component={Pagenotfound} />
      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default App;