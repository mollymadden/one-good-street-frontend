
import React from "react";
import axios from 'axios';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../admin-nav';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleEditUser = (data) => {

    console.log('handleEditUser data', data);

    const option = {
      url: process.env.REACT_APP_BACKEND_URL + "/users/edit/" + this.props.match.params.id,
      method: "PUT",
      headers: {
        "authorization": `${localStorage.authToken}`
      },
      data: data
    }

    axios(option)
      .then(res => {
        this.props.history.push('/users');
      })
      .catch((err) => {
        console.log(err)
      })

  }


  componentDidMount() {
    const option = {
      headers: {
        "authorization": `${localStorage.authToken}`
      }
    }
    console.log(this.props.match.params.id)
    axios.get(process.env.REACT_APP_BACKEND_URL + '/users/' + this.props.match.params.id, option)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: response.data.password
        })
      })
      .catch(function (error) {
        console.log(error);
      })

      .catch((error) => {
        console.log(error);
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

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password

    }));

    const option = {
      headers: {
        "authorization": `${localStorage.authToken}`
      }
    }

    console.log(this.state);

    axios.put(process.env.REACT_APP_BACKEND_URL + '/users/edit/' + this.props.match.params.id, this.state, option)
      .then(res => {
        this.props.history.push('/users');
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {

    //only rendering this page if it is authorized user.

    if (localStorage.authToken) {
      return (
        <div>
          <Header />
          <Adminav />
          <Title title="Edit User" />
          <form action="/action_page.php">
            <div className="main-form">
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
                />
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
                />
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
              </div>
              <div>
                <input type="text"
                  required

                  name="lastName"
                  placeholder="Last Name.."
                  value={this.state.password}
                  onChange={this.onchangePassword}
                />
              </div>

              <div>
                <button onClick={this.onSubmit} className="general-button" onSubmit={this.handleEditUser}>Submit Edit</button>
              </div>
            </div>
          </form>
        </div>
      )
      
    }
    else {
      return <h1>You are not authorised to view this page</h1>
    }
  }
}

export default EditUser;