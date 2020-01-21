import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

class Login extends React.Component {
    state =
        {
            email: "",
            password: "",
            data: {}
        }
    fieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post('http://localhost:5000/users/login',
                {
                    email: this.state.email,
                    password: this.state.password
                });
            console.log(response);

            this.setState({ data: response.data });
            axios.defaults.headers.common['Authorization'] = response.data.token;
            localStorage.setItem('authToken', response.data.token);
            console.log(this.props.history);
            this.props.history.push('/admin/dashboard');
            

        }
        catch (err) {
            this.setState({ data: err });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: <input type="text" name="email" onChange={this.fieldChange} />
                    </label>
                    <label>
                        Password: <input type="text" name="password" onChange={this.fieldChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <div>
                        Login response
                    </div>
                    <div>
                        {JSON.stringify(this.state.data)}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);