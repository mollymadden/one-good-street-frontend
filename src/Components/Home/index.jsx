import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import ContactForm from '../Shared/slider';
import Hero from '../Home/Heroimage';
import HeatMap from './map';
import Adminav from '../Admin/admin-nav';
import './home.css';
import partners from "../../assets/partners.png";
import home_01 from "../../assets/home_01.png";
import home_02 from "../../assets/home_02.png";
import home_03 from "../../assets/home_03.png";


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header />
                <Adminav />
                <ContactForm />
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

                    <p className="map-heading">“THE BEST STREETS TO AGE IN”<br />
                        THESE STREETS ARE PART OF THE ONE GOOD STREET MOVEMENT AND ARE ACTIVELY INVOLVED IN THEIR OLDER NEIGHBOURS TO REMAIN IN THEIR COMMUNITY</p>
                </div>


                <div className="map">
                    <HeatMap />
                </div>

                <div className="blurb-border-title">PARTNERS & SUPPORTERS</div>
                <div className="blurb">
                    <p>We acknowledge and appreciate the relationships and support from a number of like minded organisations committed to improving the lives of older Australians.</p>
                </div>
                <br />

                <img src={partners} className="partners" alt="friends helping eachother" />

                <div className="blurb-border-title">Our Initiatives</div>
                <div className="initiatives">
                    <div className="circle">
                        <a href="./get-involved"><h1><img src={home_01} /></h1>
                            <h3>One Good Street Accreditation</h3></a>
                    </div>

                    <div className="circle">
                        <a href="./library"><h1><img src={home_02} /></h1>
                            <h3>library of care things</h3></a>
                    </div>

                    <div className="circle">
                        <h1><img src={home_03} /></h1><h3>Ride to End Loneliness</h3>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;