import React, { Component } from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Hero from '../Home/Heroimage';
import Adminav from '../Admin/admin-nav';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="One Good Street" />
                <div>
                    <Hero />
                </div>
                <div className="blurb-border-title">What Is One Good Street?</div>
                <div className="blurb-border-title">The Answers Are On Our Doorstep</div>
                <div className="blurb">
                    <p>One Good Street is in response to the older people we have met, their adult children who have told us their stories, the care staff we have worked with and the communities in which they live in.</p>

                    <p>Social isolation and loneliness in older age is becoming one of the largest health concerns we face in Australia. Lonely older people have poor health outcomes. Many older residents in our neighbourhoods go many days during the week without speaking or seeing anyone.</p>

                    <p>Neighbours and communities can play an active role in changing a lonely older person’s future. One Good Street believes that the answers are on our doorstep.</p>
                </div>



            </div>
        )
    }
}


export default Home;