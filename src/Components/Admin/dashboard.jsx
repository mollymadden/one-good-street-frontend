import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import EditItem from '../Libraryct/Upload/editItem';
import LibraryCard from '../Libraryct/Card';

class Dashboard extends React.Component {
  state = {
    items: []
}

    async componentDidMount() {
      try {
        const response = await
            axios.get('https://vast-headland-25884.herokuapp.com' + "/users/dashboard")
            console.log(response);

        const res = await fetch("https://vast-headland-25884.herokuapp.com/items")
        const data = await res.json()
        this.setState({
            items: data
        })
      }
      catch (error){
        console.log(error.message)
        //this.props.history.push('/')
      }
        
    }

  
    pageRender(){
      if(localStorage.authToken){
  
        return ( 
          <div>
          <h1>You are on the admin dashboard page</h1>
          <EditItem />
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