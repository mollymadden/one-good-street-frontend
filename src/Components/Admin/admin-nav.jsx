import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./admin-nav.css";

class Adminav extends React.Component {
    render() {
        return (
            <div className="adminav">
                <nav>
                    <ul>
                        <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                        <li><Link to='/users'>Users Settings</Link></li>
                        <li><Link to='/'>Sign Out</Link></li>
                    </ul>
                </nav>
            </div >
        )
    }
}


export default Adminav;
