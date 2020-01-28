//This component renders the login form. 
//This component calls the backend api (where the backend is deployed to, Heroku) and checks the user email against their assigned passwords.
//If they match, they can login and are redirected to the admin dashboard via this.props.history.push.


import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class Login extends React.Component {
    state =
        {
            email: "",
            password: "",
            data: {},
            loginError: ''
        }
    fieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/users/login',
                {
                    email: this.state.email,
                    password: this.state.password
                });
            console.log(response);

            this.setState({ data: response.data });

            localStorage.setItem('authToken', response.data.token);
            console.log(this.props.history);
            this.props.history.push('/admin/dashboard');


        }
        catch (err) {
            this.setState({ data: err });
            this.setState({loginError: true})
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email:<br /> <input type="text" name="email" onChange={this.fieldChange} />
                        </label><br />
                    </div>
                    <div className="form-group">
                        <label>
                            Password:<br /> <input type="password" name="password" onChange={this.fieldChange} />
                        </label><br />
                    </div>
                    <input type="submit" value="Submit" className="general-button" />
                </form>
                <div>
                    {this.state.loginError && (
                    <p>
                        Incorrect email or password
                    </p>
                    )}
                    {/* <div>
                        {JSON.stringify(this.state.data)}
                    </div> */}
                </div>
            </div>
        );
    }
}
export default withRouter(Login);