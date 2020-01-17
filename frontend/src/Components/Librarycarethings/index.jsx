import React, { Component } from 'react'
import Librarycard from './ItemUI';
import img1 from "../../assets/shower-stool.png";
import img2 from "../../assets/electric-wheelchair.png"
import NavBar from '../Shared/NavBar';

class Library extends Component {


    render() {
        return (
            <div>
                <div><NavBar /></div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-sm-4"><Librarycard imgsrc={img1} title="Shower Stool" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img2} title="Electric Wheelchair" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img1} title="Shower Stool" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img2} title="Electric Wheelchair" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img1} title="Shower Stool" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img2} title="Electric Wheelchair" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img1} title="Shower Stool" /></div>
                        <div className="col-sm-4"><Librarycard imgsrc={img2} title="Electric Wheelchair" /></div>
                    </div>
                </div>
            </div>



        );
    }
}

export default Library