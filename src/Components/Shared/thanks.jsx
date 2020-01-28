import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import cuties from "../../assets/cuties.jpg"

class Thanks extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Thanks! Your query has been sent." />
                <img src={cuties} /><br />
                <a href="./">Go Back Home</a>
            </div>
        )
    }
}

export default Thanks;