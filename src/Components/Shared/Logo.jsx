import React from 'react';
import { Link } from 'react-router-dom';
import "./Logo.css";
import logo from "../../assets/FULL-COLOUR-LOGO_RGB.png";



class Logo extends React.Component {
    render() {
        return (
            <div className="mainlogo">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
        )
    }
}

export default Logo;