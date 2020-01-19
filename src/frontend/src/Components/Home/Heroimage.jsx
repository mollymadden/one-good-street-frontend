import React, { Component } from 'react';
import ladies from "../../assets/ogsladies-1.png"

class Hero extends React.Component {
    render() {
        return (
            <div>
                <img src={ladies} />
            </div>
        )
    }
}

export default Hero;