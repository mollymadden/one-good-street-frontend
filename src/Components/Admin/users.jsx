//This is the table of all users admin users can see

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from './admin-nav';

const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.email}</td>
    <td>{props.user.password}</td>

    <td>
      <Link to={"/users/edit/" + props.user._id}>📝</Link>
      {/* <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>🗑</a>
      <a href="#" onClick={() => { props.togglePublished(props.item._id) }}>P</a> */}
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
      this.props.history.push('/')
    }
  }




  render() {

    if (localStorage.authToken) {
      return (
        <div>
          <Header />
          <Adminav />
          <Title title="Manage Users" />

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => <User user={user} key={user._id} />)}
            </tbody>
          </table>
        </div>


      )
    }
    else {
      return (
        null
      )
    }
  }
}

export default UserList;