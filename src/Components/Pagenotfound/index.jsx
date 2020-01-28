import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import cuties from "../../assets/cuties.jpg"

class Pagenotfound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Page Not Found" />
                <img src={cuties} />
            </div>
        )
    }
}

export default Pagenotfound;