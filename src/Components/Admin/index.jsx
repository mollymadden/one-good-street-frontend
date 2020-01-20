import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Login from './login';

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Title title="Admin Login" />
                <div>
                    <Login />
                </div>
            </div>
        )
    }
}

export default Admin;