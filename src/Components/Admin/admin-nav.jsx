import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "./admin-nav.css";



class Adminav extends React.Component {

  
      async componentDidMount() {
        try {
          const response = await
              axios.get('https://vast-headland-25884.herokuapp.com' + "/users/dashboard", { headers: {'Authorization': localStorage.getItem('authToken') } } );
              console.log(response);
        }
        catch (error){
          console.log(error.message)
          this.props.history.push('/')
        }
      }
  
    signout = () => {
        window.localStorage.removeItem('authToken');
        this.props.history.push('/')
    }
  
      render() {
        if(localStorage.authToken){
    
            return ( 
              <div className="adminav">
              <nav>
                  <ul>
                      <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                      <li><Link to='/users'>Manage Users</Link></li>
                      <li><a onClick={this.signout}>Sign Out</a></li>




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



