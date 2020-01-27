import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './slider.css';
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return <div ref={ref => this.el = ref}>
            <div className="icon-bar">
                <a href="https://www.facebook.com/groups/onegoodstreet/" className="facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <button onClick={() => this.setState({ isPaneOpen: true })} className="contact-button"><FontAwesomeIcon icon={faEnvelopeOpenText} /></button>
            </div>



            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={this.state.isPaneOpen}
                title='Contact One Good Street'
                from='right'
                width='400px'
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                }}>
                <div>CONTACT FORM GOES HERE</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
        </div >;
    }
}

export default ContactForm;