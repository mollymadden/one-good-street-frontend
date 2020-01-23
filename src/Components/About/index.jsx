import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import hands from "../../assets/hands.jpg"

class About extends React.Component {
    render() {
        return (
            <div className="center-things">
                <div className="Main">
                    <Header />
                    <Adminav />
                    <Title title="About One Good Street" />
                    <div className="blurb">
                        <p>We aim to reduce social isolation and loneliness in older residents who live in our neighbourhoods through practical initiatives that everyone can get involved in.</p>

                        <p>One Good Street seeks to strengthen all the links in the chain that keep older residents independent in their own homes for as long as possible. Those links in the chain include family members, friends and carers, community nurses, GP’s and home support services.</p>
                    </div>

                    <div className="blurb-border-title">How It Works</div>
                    <div className="blurb-border">
                        <p>Streets are recognised as being Good Streets by signing up to the website and joining in the One Good Street activities. A sense of connectedness to local communities, and of belonging to others, is an important antidote to loneliness for many older people. Activities are practical, low commitment and happen regularly in your local neighbourhoods.</p>
                    </div>
                    <br />
                    <div className="blurb-border">
                        <p><em>"In our neighbourhoods, a lonely older person’s day, week and month is determined by the many actions taken daily by neighbours, actions that can be influenced on what these neighbours believe about a lonely older person’s future and their own role in improving it."</em></p>
                    </div>
                    <div className="blurb-border-title">The Journey So Far</div>
                    <div className="blurb-border">
                        <p>1024 Members. 4 Active Suburbs. 3 Projects Running</p>
                    </div>


                    <div className="blurb-border-title">GOOD STREETS TO AGE IN</div>

                    <div className="blurb-border">


                        <div className="float-left-p">
                            <img src={hands} />
                            <div className="p">
                                <p>One Good Street seeks to create opportunities for residents to make a positive difference in the lives of their senior neighbours. We work with initiatives like casserole club, cycling without ageing, community houses and local councils to promote activities that reduce loneliness and isolation. &nbsp;</p>

                                <p>Activities are practical, low commitment and you can join at short notice with the aim of promoting neighbourhood participation around the older person. Involvement in these activities makes your street a great street to age in.</p>
                                <button type="button" className="btn btn-info" onClick={() => { this.props.history.push("/get-involved") }} type="button">Register Your Street</button>

                            </div>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}


export default About;