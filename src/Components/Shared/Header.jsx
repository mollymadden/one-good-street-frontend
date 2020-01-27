import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from '../Shared/Logo';
import ContactForm from '../Shared/contact-form';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About One Good Street</Link></li>
                        <li><Link to='/library'>Library Of Care Things</Link></li>
                        <li><Link to='/media-events'>Media & Events</Link></li>
                        <li><Link to='/get-involved'>Get Involved</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                    </ul>
                </nav>
                <Logo />
                <ContactForm />
            </div >

        )
    }
}


export default Header;

