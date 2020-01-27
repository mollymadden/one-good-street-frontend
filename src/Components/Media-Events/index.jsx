import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import ContactForm from '../Shared/slider';

class Media extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <ContactForm />
                    <Adminav />
                    <Title title="Media & Events" />
                </div>
            </div>
        )
    }
}


export default Media;