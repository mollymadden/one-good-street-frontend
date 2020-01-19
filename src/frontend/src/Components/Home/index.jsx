import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Hero from '../Home/Heroimage';

const title = "Home";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Title title="One Good Street" />
                <Hero />
            </div>
        )
    }
}


export default Home;