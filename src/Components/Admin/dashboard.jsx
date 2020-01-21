import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
class Dashboard extends React.Component {
    async componentDidMount() {
      try {
        const response = await
            axios.get("http://localhost:5000" + "/users/dashboard")
            console.log(response);
      }
      catch (error){
        console.log(error.message)
        this.props.history.push('/')
      }
        
    }
    render() {
        return (<div>
            <h1>You are on the admin dashboard page</h1>
        </div>)
    }
}
export default withRouter(Dashboard);