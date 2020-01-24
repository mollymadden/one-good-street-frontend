import React from 'react';
import ladies from "../../assets/ogsladies-1.png"
import './Heroimage.css';


class Hero extends React.Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <img src={ladies} alt="hero" />
                </div>
            </div>
        )
    }
}

export default Hero;