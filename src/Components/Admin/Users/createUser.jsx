//Create new user form
//This 

import React from 'react';
import axios from 'axios';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../admin-nav';


class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      email: '',
      emailError: '',
      duplicateEmail: false,
      password: '',
      passwordError: ''

    }
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onchangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    });
  }

  onchangeLastName = (e) => {
    this.setState({
      lastName: e.target.value
    });
  }

  onchangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onchangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {};
    if (this.state.firstName.length < 1) {
      isError = true;
      errors.firstNameError = 'First name cannot be blank';
    }

    if (this.state.lastName.length < 1) {
      isError = true;
      errors.lastNameError = 'Last name cannot be blank';
    }

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Requires valid email';
    }

    if (this.state.password.length < 5) {
      isError = true;
      errors.passwordError = 'Passwords needs to be at least 5 characters long';
    }



    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }
    return isError;
  }

  onSubmit = (e) => {
    e.preventDefault();

    const err = this.validate();
    if (!err) {

      this.setState(state => ({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password

      }));


      console.log(this.state);



      axios.post(process.env.REACT_APP_BACKEND_URL + '/users/create', this.state)
        .then(res => {
          this.props.history.push('/users'); //goes back to manage users page
        })
        .catch((err) => {
          console.log(err)
          this.setState({ duplicateEmail: true })
        })

    }

    return this.state;
  }








  render() {
    return (
      <div>
        <Header />
        <Adminav />
        <Title title="Create User" />
        <div className="main-form">
          <form action="/action_page.php">
            <div className="form-group">
              <label htmlFor="">First Name</label>
            </div>
            <div>
              <input type="text"
                required

                name="firstName"
                placeholder="First Name.."
                value={this.state.firstName}
                onChange={this.onchangeFirstName}
                errortext={this.state.firstNameError}
              />

              <div>{this.state.firstNameError}</div>
            </div>

            <div className="form-group">
              <label htmlFor="">Last Name</label>
            </div>
            <div>
              <input type="text"
                required

                name="lastName"
                placeholder="Last Name.."
                value={this.state.lastName}
                onChange={this.onchangeLastName}
                errortext={this.state.lastNameError}
              />
              <div>{this.state.lastNameError}</div>
            </div>

            <div className="form-group">

              <label htmlFor="">Email</label>
            </div>

            <div>
              <input type="text"
                required

                name="email"
                placeholder="Email.."
                value={this.state.email}
                onChange={this.onchangeEmail}
                errortext={this.state.emailError}
              />
              {this.state.duplicateEmail && (
                <p>Email already exists</p>
              )}
            </div>
            <div>{this.state.emailError}

            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
            </div>
            <div>
              <input type="text"
                required

                name="password"
                placeholder="Password.."
                value={this.state.password}
                onChange={this.onchangePassword}
                errortext={this.state.passwordError}
              />
            </div>
            <div>{this.state.passwordError}</div>

            <div>
              <button onClick={this.onSubmit} className="general-button" >Add User</button>
            </div>


          </form>
        </div>
      </div>
    )
  }
}

export default CreateUser;