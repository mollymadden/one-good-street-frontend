//This is the Library of care things page - where cards of donated items are rendering. In component did mount, we are fetching the server side data from heroku. 

import React, { Component } from 'react'
import Search from './search';
import img1 from "../../assets/shower-stool.png";
import img2 from "../../assets/electric-wheelchair.png";
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Button from '../Shared/Button';
import Adminav from '../Admin/admin-nav';



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
                <Title title="Library of Care Things" />
                <div className="blurb">
                    All equipment is free. Equipment must be cleaned and in working order prior to collection.

                    For some equipment an Occupation Therapy assessment is recommended to make sure the equipment is the right size and type for the older person.

                    A waiver form is signed by the person collecting the equipment. Electrical equipment checklist and Cleaning checklist for the person donating the equipment.

                    Please email info@onegoodstreet.com.au if you are interested in any of the equipment.
                </div>

                <Button />
                <Search items={this.state.items} />
            </div>

        );
    }
}

export default Library;