import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import axios from "axios";

import Library from './Components/Libraryct';

import Home from './Components/Home';
import Media from './Components/Media-Events';
import Pagenotfound from './Components/Pagenotfound';
import About from './Components/About';
import Getinvolved from './Components/Get-Involved';
import Admin from './Components/Admin';
import Dashboard from './Components/Admin/dashboard';

import Upload from './Components/Libraryct/Upload';

// change

function App() {
  return (<div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/library" component={Library} />
        <Route path="/media-events" component={Media} />
        <Route path="/get-involved" component={Getinvolved} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/pagenotfound" component={Pagenotfound} />
        <Route exact path="/library/upload" component={Upload} />

        {/* <Route exact path="/libraryofcarethings/upload" render={() => (
          <SyncValidationForm handleSubmit={handleForm} />)} /> */}

      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default App;