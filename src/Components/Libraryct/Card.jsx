import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './card-style.css'

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
        const { items } = this.state
        return (
            <div className="card text-center shadow">
                <h1>👻</h1>
                {items ? items.map((item) => {
                    return (
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src={item.image} alt="Image 1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">{item.itemName}</h4>
                                <p className="card-text text-secondary">{item.headline}</p>
                                <p className="card-text text-secondary">📍 {item.postcode}</p>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        )
    }
}

export default Librarycard;