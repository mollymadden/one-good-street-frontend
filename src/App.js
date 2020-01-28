import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import Library from './Components/Libraryct';

import Home from './Components/Home';
import Media from './Components/Media-Events';
import Pagenotfound from './Components/Pagenotfound';
import About from './Components/About';
import Getinvolved from './Components/Get-Involved';
import Admin from './Components/Admin';
import Dashboard from './Components/Admin/dashboard';

import CreateItem from './Components/Libraryct/Upload/createItem';
import Show from './Components/Libraryct/show-item';
import EditItem from './Components/Libraryct/Upload/editItem';

import UserList from './Components/Admin/Users/index'
import CreateUser from './Components/Admin/Users/createUser';
import EditUser from './Components/Admin/Users/editUser';

import GetInvolved from './Components/Get-Involved/getInvolved'



//create users edit route path
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
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/add" component={CreateUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/library/upload" component={CreateItem} />
        <Route exact path="/items/:id" component={Show} />
        <Route exact path="/items/edit/:id" component={EditItem} />

        <Route path="/pagenotfound" component={Pagenotfound} />
        <Redirect to="/pagenotfound" />
      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default App;