import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <Title title="About One Good Street" />
                <div className="about">
                    <div className="blurb">
                        <p>We aim to reduce social isolation and loneliness in older residents who live in our neighbourhoods through practical initiatives that everyone can get involved in.</p>

                        <p>One Good Street seeks to strengthen all the links in the chain that keep older residents independent in their own homes for as long as possible. Those links in the chain include family members, friends and carers, community nurses, GP’s and home support services.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;