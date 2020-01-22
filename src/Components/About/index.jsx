import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';

class About extends React.Component {
    render() {
        return (
            <div className="center-things">
                <div className="Main">
                    <Header />
                    <Title title="About One Good Street" />
                    <div className="blurb">
                        <p>We aim to reduce social isolation and loneliness in older residents who live in our neighbourhoods through practical initiatives that everyone can get involved in.</p>

                        <p>One Good Street seeks to strengthen all the links in the chain that keep older residents independent in their own homes for as long as possible. Those links in the chain include family members, friends and carers, community nurses, GP’s and home support services.</p>
                    </div>

                <div className="blurb-border-title">How It Works</div>
                <div className="blurb-border">
                    <p>Streets are recognised as being Good Streets by signing up to the website and joining in the One Good Street activities. A sense of connectedness to local communities, and of belonging to others, is an important antidote to loneliness for many older people. Activities are practical, low commitment and happen regularly in your local neighbourhoods.</p>
                </div>

                </div>
            </div>
        )
    }
}


export default About;