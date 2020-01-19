import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Logo.module.css";



class Logo extends React.Component {
    render() {
        return (
        <Link to='/'><img src="FULL-COLOUR-LOGO_RGB.PNG" /></Link>
        )
    }
}

export default Logo;