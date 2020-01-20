import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import Logo from '../Shared/Logo';

class Header extends React.Component {
    render() {
        return (<div className={styles}>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About One Good Street</Link></li>
                    <li><Link to='/libraryofcarethings'>Library Of Care Things</Link></li>
                    <li><Link to='/media-events'>Media & Events</Link></li>
                    <li><Link to='/get-involved'>Get Involved</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
            </nav>
            <Logo />
        </div >

        )
    }
}


export default Header;

