//Dashboard component renders the tableList component. It only renders this table (with all the item listings in a table format) upon successful user login via the login component.  

//This page renders once login successful otherwise there is redirection to home page

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from './admin-nav';

import TableList from '../Admin/tableList';
//import table component 

class Dashboard extends React.Component {
  state = {
    items: [],
  }



  async componentDidMount() {
    try {
      await
        axios.get(process.env.REACT_APP_BACKEND_URL + "/users/dashboard", { headers: { 'Authorization': localStorage.getItem('authToken') } });

      const items = await
        axios.get(process.env.REACT_APP_BACKEND_URL + "/items");




      // const res = await axios.get("https://vast-headland-25884.herokuapp.com/items");

      this.setState({
        items: items.data
      })
    }
    catch (error) {
      console.log(error.message)
      this.props.history.push('/')
    }

  }


  //This page will only render with the right users - it checks the token. 
  pageRender() {
    if (localStorage.authToken) {

      return (
        <div>
          <Header />
          <Adminav />
          <Title title='Library Dashboard' />

          {this.state.items.length > 0 &&
            <TableList items={this.state.items} {...this.props} />
          }
        </div>

      )

    }
    else {
      return <h1>You are not authorised to view this page</h1>
    }
  }

  render() {
    return this.pageRender();
  }


}

export default withRouter(Dashboard);