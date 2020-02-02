//this is a component that is not being used anywhere YET
//in the future, this component will be rendered on the show-item page, and the location of the maps center will be the postcode noted from {item.postcode}

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const postcodes = require('../../asset/australian_postcodes.json');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ShowMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default ShowMap;