import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';

class Pagenotfound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Page Not Found" />
            </div>
        )
    }
}

export default Pagenotfound;