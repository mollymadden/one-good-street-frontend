import React from 'react';
import NavBar from '../Shared/NavBar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div><NavBar /></div>
                <h1>Home</h1>
                <p>Home page body content</p>
            </div>
        )
    }
}


export default Home;