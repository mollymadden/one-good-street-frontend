import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";

function NavBar() {
    return (<div className={styles}>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About One Good Street</Link></li>
                <li><Link to='/libraryofcarethings'>Library Of Care Things</Link></li>
                <li><Link to='/media-events'>Media & Events</Link></li>
                <li><Link to='/get-involved'>Get Involved</Link></li>
            </ul>
        </nav>
    </div>

    )
}


export default NavBar;