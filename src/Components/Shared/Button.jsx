import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <button type="button" className="btn btn-info">Button</button>
            </div>
        )
    }
}

export default Button;