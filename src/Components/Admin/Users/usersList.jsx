//This is the table of all users admin users can see

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../admin-nav';
import Unauthorised from "../../Shared/unauthorised";


const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.email}</td>
    {/* <td>{props.user.password}</td> */}

    <td className="icons">
      <Link to={"/users/edit/" + props.user._id}>📝</Link></td>

    <td className="icons"><a href="#" onClick={() => { if (window.confirm('Are you sure you want to delete this user?')) { props.deleteUser(props.user._id) } }}>🗑</a>
    </td>
  </tr>
)


class UserList extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    try {
      await
        axios.get(process.env.REACT_APP_BACKEND_URL + "/users/dashboard", { headers: { 'Authorization': localStorage.getItem('authToken') } });


      const users = await
        axios.get(process.env.REACT_APP_BACKEND_URL + "/users");

      this.setState({
        users: users.data
      })
    }
    catch (error) {
      console.log(error.message)
      this.props.history.push('/users')
    }
  }



  deleteUser = (id) => {
    const option = {
      url: process.env.REACT_APP_BACKEND_URL + "/users/delete/" + id,
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": `${localStorage.authToken}`
      }
    }
    axios(option)
      .then(response => { console.log(response.data) });

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })


  }


  render() {
    if (localStorage.authToken) {
      return (
        <div>
          <Header />
          <Adminav />
          <Title title="Manage Users" />

          <table className="users-table">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => <User user={user} key={user._id} deleteUser={this.deleteUser} />)}
            </tbody>
          </table>
        </div>
      )
    }
    else {
      return (
        <Unauthorised />
      )
    }
  }
}

export default UserList;