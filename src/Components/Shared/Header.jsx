import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from '../Shared/Logo';


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT ONE GOOD STREET</Link></li>
                        <li><Link to='/library'>LIBRARY OF CARE THINGS</Link></li>
                        <li><Link to='/media-events'>MEDIA & EVENTS</Link></li>
                        <li><Link to='/get-involved'>GET INVOLVED</Link></li>
                        <li><Link to='/admin'>ADMIN</Link></li>
                    </ul>
                </nav>
                <Logo />
            </div >
        )
    }
}


export default Header;

