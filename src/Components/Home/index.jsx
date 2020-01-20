import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Hero from '../Home/Heroimage';
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Title title="One Good Street" />
                <div>
                    <Hero />
                </div>
            </div>
        )
    }
}


export default Home;