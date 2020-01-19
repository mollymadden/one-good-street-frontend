import React, { Component } from 'react';
import ladies from "../../assets/ogsladies-1.png"
import styles from "./Heroimage.module.css";


class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <img src={ladies} />
            </div>
        )
    }
}

export default Hero;