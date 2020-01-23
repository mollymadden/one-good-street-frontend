import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Button extends React.Component {

    render() {
        return (
            <div className="buttondiv">
                <button type="button" className="btn btn-info" onClick={() => { this.props.history.push("/library/upload") }} type="button">Upload an Item</button>
            </div>)
    }
}

export default withRouter(Button);