import React from 'react';
import { withRouter } from 'react-router-dom';

class Button extends React.Component {

    render() {
        return (
            <div className="buttondiv">
                <button type="button" className="general-button" onClick={() => { this.props.history.push("/library/upload") }} type="button">Upload an Item</button>
            </div>)
    }
}

export default withRouter(Button);