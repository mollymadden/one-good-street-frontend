//This is the nav bar that will only appear when an administrator is logged in.

import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "./admin-nav.css";

class Adminav extends React.Component {

  async componentDidMount() {
    try {
      const response = await
        axios.get(process.env.REACT_APP_BACKEND_URL + "/users/dashboard", { headers: { 'Authorization': localStorage.getItem('authToken') } });
      console.log(response);
    }
    catch (error) {
      console.log(error.message)
      this.props.history.push('/')
    }
  }

  signout = () => {
    window.localStorage.removeItem('authToken');
    this.props.history.push('/')
  }

  render() {
    if (localStorage.authToken) {

      return (
        <div className="adminav">
          <nav>
            <ul>
              <li><Link to='/admin/dashboard'>DASHBOARD</Link></li>
              <li><Link to='/users'>MANAGE USERS</Link></li>
              {/* eslint-disable-next-line */}
              <li><a onClick={this.signout}>SIGN OUT</a></li>
            </ul>
          </nav>
        </div >

      )



    }
    else {
      return (
        null
      )
    }
  }


}

export default withRouter(Adminav);



