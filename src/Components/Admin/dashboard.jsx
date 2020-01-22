//Admin dashboard where only logged in admin user can view, edit and delete any of the items.

//ADDDDDDD - admin changes things to published 

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import EditItem from '../Libraryct/Upload/editItem';
import LibraryCard from '../Libraryct/Card';

import TableList from '../Admin/tableList';
//import table component 

class Dashboard extends React.Component {
  state = {
    items: []
}

    async componentDidMount() {
      try {
        const response = await
            axios.get('https://vast-headland-25884.herokuapp.com' + "/users/dashboard", { headers: {'Authorization': localStorage.getItem('authToken') } } );
            console.log(response);

        const res = await axios.get("https://vast-headland-25884.herokuapp.com/items");
        
        this.setState({
            items: res.data
        })
      }
      catch (error){
        console.log(error.message)
        this.props.history.push('/')
      }
        
    }

  
    pageRender(){
      if(localStorage.authToken){
  
        return ( 
          <div>
          <h1>You are on the admin dashboard page</h1>
          {/* <EditItem /> */}
          {this.state.items.length > 0 && 
            <TableList items={this.state.items} /> 
          }
          </div>
          
        )  
        


      }
      else{
       return <h1>What are you doing here?</h1>
      }
    }

    render() {
        return this.pageRender();
    }

  
  }

export default withRouter(Dashboard);