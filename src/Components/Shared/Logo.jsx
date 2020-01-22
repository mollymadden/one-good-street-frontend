import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Logo.css";



class Logo extends React.Component {
    render() {
        return (
            <div className="mainlogo">
                <Link to='/'><img src="FULL-COLOUR-LOGO_RGB.PNG" /></Link>
            </div>
        )
    }
}

export default Logo;