import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {

  async componentDidMount (){
    const response = await
    axios.get("https://vast-headland-25884.herokuapp.com" + "/users/dashboard")
    if (response.status != 200) {
      this.props.history.push('/');
    } 
  }
  render (){
    return (<div>
      <h1>you are on the admin page</h1>
    </div>)
  }
}

export default Dashboard;