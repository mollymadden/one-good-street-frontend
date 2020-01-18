import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";




function Header() {
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

        <div className="whitespace">
            <Link to='/'><img src="FULL-COLOUR-LOGO_RGB.PNG" /></Link>
        </div>




    </div>

    )
}


export default Header;