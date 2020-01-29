import React from 'react';
import './Card.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// mapping through json file located here
// https://vast-headland-25884.herokuapp.com/items



class Librarycard extends React.Component {


    // Key might get rid of console errors

    render() {
        // console.log("https://vast-headland-25884.herokuapp.com/items")
        const { results } = this.props;
        console.log(results)
        return (
            <section>
                <div className="cards">
                    {results ? results.map((item, index) => {
                        if (item.published) {
                            return (
                                <div className="card" max-width="200" key={index}>
                                    <div className="image">
                                        <a href={"/items/" + (item._id)} >
                                            <img src={item.image} className="picture" width="200" /></a>
                                    </div>
                                    <div className="carddescript">

                                        <a className="piclink" href={"/items/" + (item._id)}  >
                                            <h3>{item.itemName}</h3>
                                        </a>
                                        {item.headline}
                                    </div>
                                    <div className="bottom-sec">
                                        <p>📍 {item.postcode}</p>
                                    </div>

                                </div>
                            )
                        }
                    }) : null}
                </div>
            </section >
        )
    }
}



export default Librarycard;