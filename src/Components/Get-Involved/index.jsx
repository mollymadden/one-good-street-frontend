//Get involved index page that renders the GetInvolved component.
//GetInvolved component is a form that connects to nodemailer

import React, { useState } from "react";
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import ContactForm from '../Shared/slider';
import Adminav from '../Admin/admin-nav';
import '../Shared/form-styling.css';
import Footer from '../Shared/footer';

import GetInvolved from '../Get-Involved/getInvolved'

class Getinvolved extends React.Component {

    submit = (values) => {
        console.log(values);
    }


    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <ContactForm />
                <Title title="Get Involved" />
                <GetInvolved onSubmit={this.submit} />
                <Footer />
            </div>
        );
    }

}

export default Getinvolved;