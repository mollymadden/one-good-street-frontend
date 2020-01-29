import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import hands from "../../assets/hands.jpg";
import help from "../../assets/help.jpeg";
import ride from "../../assets/ride.jpg";
import ContactForm from '../Shared/slider';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="center-things">
                <div className="Main">
                    <Header />
                    <ContactForm />
                    <Adminav />
                    <Title title="About One Good Street" />
                    <div className="blurb">
                        <p>We aim to reduce social isolation and loneliness in older residents who live in our neighbourhoods through practical initiatives that everyone can get involved in.</p>

                        <p>One Good Street seeks to strengthen all the links in the chain that keep older residents independent in their own homes for as long as possible. Those links in the chain include family members, friends and carers, community nurses, GP’s and home support services.</p>
                    </div>

                    <div className="blurb-border-title">The Journey So Far</div>
                    <div className="blurb-border">
                        <div className="initiatives">
                            <div className="circle">
                                <h1>1024 </h1><h3>Members.</h3>
                            </div>

                            <div className="circle">

                                <h1>4</h1><h3>Active Suburbs.</h3>
                            </div>

                            <div className="circle">
                                <h1>3</h1><h3>Projects Running.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="blurb-border-title">How It Works</div>
                    <div className="blurb-border">
                        <p>Streets are recognised as being Good Streets by signing up to the website and joining in the One Good Street activities. A sense of connectedness to local communities, and of belonging to others, is an important antidote to loneliness for many older people. Activities are practical, low commitment and happen regularly in your local neighbourhoods.</p>
                    </div>
                    <br />
                    <div className="blurb-border">
                        <p><em>"In our neighbourhoods, a lonely older person’s day, week and month is determined by the many actions taken daily by neighbours, actions that can be influenced on what these neighbours believe about a lonely older person’s future and their own role in improving it."</em></p>
                    </div>




                    <div className="blurb-border-title">GOOD STREETS TO AGE IN</div>
                    <div className="blurb-border">
                        <div className="about-container">
                            <img className="about" src={hands} />
                            <div className="about-p">
                                <p>One Good Street seeks to create opportunities for residents to make a positive difference in the lives of their senior neighbours. We work with initiatives like casserole club, cycling without ageing, community houses and local councils to promote activities that reduce loneliness and isolation.</p>

                                <p>Activities are practical, low commitment and you can join at short notice with the aim of promoting neighbourhood participation around the older person. Involvement in these activities makes your street a great street to age in.</p>
                                <button type="button" className="general-button" onClick={() => { this.props.history.push("/get-involved") }} type="button">Register Your Street</button>

                            </div>
                        </div>
                    </div>



                    <div className="blurb-border-title">LIBRARY OF CARE THINGS</div>
                    <div className="blurb-border">
                        <div className="about-container">
                            <img className="about" src={help} />
                            <div className="about-p">
                                <p>The families we spoke to commented that healthcare organisations would not take donated products or equipment once their older relative went into aged care. Families tried to donate equipment and supplies to local charity shops or reluctantly disposed of them. This is how the Library of Care Things came to be.</p>

                                <p>The Library of Aged Care Things is part of One Good Street and is an online platform that aims to share aged care equipment (walking frames, bed rails, occupational therapy equipment) with those who need them free of charge. It helps make aged care more sustainable through up-cycling and re-purposing aged care equipment.</p>

                                <p>The lending site is for carers and family members who are looking after their older parents in their own homes. The Library of Aged Care Things reduces the cost of care for families when supporting their parents to remain at home for as long as possible. Equipment is lent out free of charge to families through the lending portal.</p>

                                <button type="button" className="general-button" onClick={() => { this.props.history.push("/Library") }} type="button">Search the Library of Care Things</button>
                            </div>
                        </div>
                    </div>

                    <div className="blurb-border-title">Ride To End Loneliness</div>
                    <div className="blurb-border">
                        <div className="about-container">
                            <img className="about" src={ride} />
                            <div className="about-p">
                                <p>“A sense of connectedness to local communities, and of belonging to others, is an important antidote to loneliness for many older people”</p>

                                <p>The aim of the Ride to End Loneliness initiative is to reduce loneliness and social isolation in older residents by reconnecting them to their wider community and giving them access to places that are familiar to them, that they may not be able to access due to social isolation, and or impaired mobility..</p>

                                <p>One Good Street is proud to offer local residents free bike rides around their suburbs with trained volunteers. Bike rides are for 30 minutes and referring someone for a ride is easy- just contact us at info@onegoodstreet.com.au. Both Volunteers and clients wear helmets and seat belts and are covered by insurance.</p>

                                <p>We aim to make it a great experience for clients and our volunteers. Ride to End Loneliness is active in the following suburbs.</p>

                                <ul>
                                    <li>West Melbourne</li>
                                    <li>North Melbourne</li>
                                    <li>Kensington</li>
                                    <li>Flemington</li>
                                    <li>Parkville</li>
                                    <li>Carlton</li>
                                </ul>
                                <button type="button" className="general-button" onClick={() => { this.props.history.push("/get-involved") }} type="button">Register Your Interest</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;