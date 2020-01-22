import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';

class Media extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Adminav />
                    <Title title="Media & Events" />
                </div>
            </div>
        )
    }
}


export default Media;