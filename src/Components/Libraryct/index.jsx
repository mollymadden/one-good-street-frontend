import React, { Component } from 'react'
import Librarycard from './Card';
import img1 from "../../assets/shower-stool.png";
import img2 from "../../assets/electric-wheelchair.png";
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Button from '../Shared/Button';


class Library extends Component {

    render() {
        return (
            <div>
                <Header />
                <Title title="Library of Care Things" />
                <div className="blurb">
                    All equipment is free. Equipment must be cleaned and in working order prior to collection.

                    For some equipment an Occupation Therapy assessment is recommended to make sure the equipment is the right size and type for the older person.

                    A waiver form is signed by the person collecting the equipment. Electrical equipment checklist and Cleaning checklist for the person donating the equipment.

                    Please email info@onegoodstreet.com.au if you are interested in any of the equipment.
                </div>


                    <Button />
                    <Librarycard />
                </div>



        );
    }
}

export default Library;