import React, { Component } from 'react'
import Card from './ItemUI';
import img1 from "../assets/shower-chair.png"
import img2 from "../assets/electric-wheelchair.png"
import img3 from "../assets/recliner.png"

class Cards extends Component {


    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4"><Card imgsrc={img1} title="Shower Chair" /></div>
                    <div className="col-md-4"><Card imgsrc={img2} title="Electric Wheelchair" /></div>
                    <div className="col-md-4"><Card imgsrc={img3} title="Recliner" /></div>
                </div>
            </div>
        );
    }
}

export default Cards