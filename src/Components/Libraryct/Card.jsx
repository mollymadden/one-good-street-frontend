import React from 'react';
import './card-style.css'



class Librarycard extends React.Component {
    state = {
        data: null
    }

    async componentDidMount() {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/items/")
        const data = await response.json()
        this.setState({
            items: data
        })
        console.log(data)
    }



    // Key might get rid of console errors

    render() {
        console.log(process.env.REACT_APP_BACKEND_URL + "/items/:_id")
        const { data } = this.state
        return (
            <div className="card text-center shadow">
                <h1>👻</h1>
                {data ? data.items.map((items) => {
                    return (
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src={items.image} alt="Image 1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">{items.itemName}</h4>
                                <p className="card-text text-secondary">{items.headline}</p>
                                <p className="card-text text-secondary">📍 {items.postcode}</p>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        )
    }
}

export default Librarycard;

