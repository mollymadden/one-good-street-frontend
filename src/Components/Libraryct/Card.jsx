import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './card-style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// mapping through json file located here
// https://vast-headland-25884.herokuapp.com/items



class Librarycard extends React.Component {
    state = {
        items: []
    }

    async componentDidMount() {
        const response = await fetch("https://vast-headland-25884.herokuapp.com/items")
        const data = await response.json()
        this.setState({
            items: data
        })
    }

    // Key might get rid of console errors

    render() {
        console.log("https://vast-headland-25884.herokuapp.com/items")
        const { items } = this.state;

        return (
            <section>
                <div className="cards">
                    {items ? items.map((item, index) => {
                        return (

                            <div className="card" max-width="200">
                                <div className="image">
                                    <a href={"/items/" + (item._id)} target="_blank">
                                        <img src={item.image} width="200" /></a>
                                </div>
                                <div className="carddescript">
                                    <h3>{item.itemName}</h3>
                                    {item.headline}
                                    <p>📍 {item.postcode}</p>
                                </div>
                            </div>


                        )
                    }) : null}
                </div>
            </section >
        )
    }
}



export default Librarycard;






{/* <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card> */}