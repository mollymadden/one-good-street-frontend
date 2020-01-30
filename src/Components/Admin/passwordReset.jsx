import React from 'react';
import axios from 'axios';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from './admin-nav';

class PasswordReset extends React.Component {
    state =
        {
            password: "",
            passwordError: ""
        }
    fieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const urlParts = window.location.href.split('/');
            const uniquekey = urlParts[urlParts.length - 1];

            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/password/reset',
                {
                    password: this.state.password,
                    uniquekey: uniquekey
                });
            console.log("Outcome...");
            console.log(response);

            this.setState({ data: response.data });

            //localStorage.setItem('authToken', response.data.token);
            // console.log(this.props.history);
            window.alert("Your password has been reset");
            this.props.history.push('/admin');


        }
        catch (err) {
            this.setState({ data: err });
            //this.setState({loginError: true})
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Reset Password" />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Password:<br /> <input type="text" name="password" onChange={this.fieldChange} />
                        </label><br />
                    </div>
                    <input type="submit" value="Submit" className="general-button" />
                </form>
                <div>
                    {this.state.passwordError && (
                        <p>

                        </p>
                    )}

                </div>
            </div>
        );
    }
}
export default PasswordReset;