//This is the Library of care things page - where cards of donated items are rendering. In component did mount, we are fetching the server side data from heroku. 

//This page also renders the Button component which when clicked redirects the user to the library of care things form 
//the library/upload page renders the CreateItem component. 

import React, { Component } from 'react'
import Search from './search';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import ContactForm from '../Shared/slider';
import waiver from "../../assets/Library-of-Care-Things-Disclaimer.pdf";
import electrical from "../../assets/Library-of-Care-Things-Electrical-Guide.pdf";
import cleaning from "../../assets/Library-of-Care-Things-Cleaning-Guide.pdf";
import Footer from '../Shared/footer';



class Library extends Component {
    state = {
        items: []
    }

    async componentDidMount() {
        try {

            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/items")
            const data = await response.json()
            this.setState({
                items: data
            })
        }
        catch (error) {
            console.log(error.message)
        }

    }

    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <ContactForm />
                <Title title="Library of Care Things" />
                <div className="blurb">
                    All equipment is free. Equipment must be cleaned and in working order prior to collection.<br /><br />

                    For some equipment an Occupation Therapy assessment is recommended to make sure the equipment is the right size and type for the older person.<br /><br />

                    A <a href={waiver} target="_blank">Waiver</a> form is signed by the person collecting the equipment. <a href={electrical} target="_blank">Electrical equipment checklist</a> and <a href={cleaning} target="_blank">Cleaning checklist</a> for the person donating the equipment.<br /><br />

                    Please email <a href={"mailto:" + "info@onegoodstreet.com.au"}>info@onegoodstreet.com.au</a>&nbsp;if you are interested in any of the equipment.<br />
                </div>

                <div className="upload button">
                    <button type="button" className="general-button" onClick={() => { this.props.history.push("/library/upload") }} type="button">Upload an Item</button>
                </div>
                <Search items={this.state.items} />
                <Footer />
            </div>

        );
    }
}

export default Library;