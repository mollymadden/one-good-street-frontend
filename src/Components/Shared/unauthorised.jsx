import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import cuties from "../../assets/cuties.jpg";

class Unauthorised extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="HALT" />
                <h1>You are not authorised to view this page.</h1>
                <img src={cuties} alt="two seniors on a bench" />
            </div>
        )
    }
}

export default Unauthorised;