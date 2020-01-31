import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import question from "../../assets/question.png"
import Footer from '../Shared/footer';

class Pagenotfound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Page Not Found" />
                <img src={question} />
                <Footer />
            </div>
        )
    }
}

export default Pagenotfound;