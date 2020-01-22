//This file renders the Login component found at login.jsx

import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Login from './login';
import Adminav from './admin-nav';

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Admin Login" />
                <div>
                    <Login />
                </div>
            </div>
        )
    }
}

export default Admin;