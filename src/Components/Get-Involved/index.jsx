import React, { useState } from "react";
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import '../Shared/form-styling.css'

import GetInvolved from '../Get-Involved/getInvolved'

class Getinvolved extends React.Component {
    
    submit = (values) => {
        console.log( values);
      }
    

    render() {
        return (
            <div>
            <GetInvolved onSubmit={this.submit} />
            </div>
        );
    }

}   

export default Getinvolved;