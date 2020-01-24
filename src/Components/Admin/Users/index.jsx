//Index page for users

//Renders UserList Component

//Renders the link to Add User which then links to the CreateUser component.


import React from "react";
import axios from 'axios';
import UserList from "./usersList";

class User extends React.Component {
  handleCreateUser = (data) => {
    console.log(data);

    //component to say uploading?? Put in here

    axios.post(process.env.REACT_APP_BACKEND_URL + '/users/create', data)

      .then(res => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <UserList />
        <button type="button" className="btn btn-info" onClick={() => { this.props.history.push("/users/add") }} type="button">Add a New User</button>
      </div>
    )
  }
}

export default User;