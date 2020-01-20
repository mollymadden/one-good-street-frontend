import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Title.css";



class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Title;