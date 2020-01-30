import React from 'react';
import axios from 'axios';

class PasswordRequest extends React.Component {
    state =
        {
            email: "",
            emailError: ""
        }
    fieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/password/request',
                {
                    email: this.state.email,
                });
            console.log(response);

            this.setState({ data: response.data });

        }
        catch (err) {
            this.setState({ data: err });
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
                    <input type="submit" value="Submit" className="general-button" />
                </form>
                <div>
                    {this.state.emailError && (
                    <p>
                        Incorrect email
                    </p>
                    )}
                    
                </div>
            </div>
        );
    }
}
export default PasswordRequest;