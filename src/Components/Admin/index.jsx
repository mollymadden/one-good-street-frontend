//This file renders the Login component found at login.jsx

import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Login from './login';
import Adminav from './admin-nav';
import axios from 'axios';


class Admin extends React.Component {

    async componentDidMount() {
        try {
            const response = await
                axios.get(process.env.REACT_APP_BACKEND_URL + "/users/dashboard", { headers: { 'Authorization': localStorage.getItem('authToken') } });
            console.log(response);
        }
        catch (error) {
            console.log(error.message)
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Admin Login" />
                <div>
                    <Login {...this.props} />
                </div>
            </div>
        )

    }

}

export default Admin;