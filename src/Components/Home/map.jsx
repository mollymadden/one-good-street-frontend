/* global google */
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

// import './map.css'

class HeatMap extends Component {
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0
    },
    zoom: 1
  }

  constructor(props) {
    super(props)
    this.state = {
      heatmapVisible: true,
      heatmapPoints: [
        { lat: 59.95, lng: 30.33 },
        { lat: 59.96, lng: 30.32 }
      ]
    }
  }

  onMapClick({ x, y, lat, lng, event }) {
    if (!this.state.heatmapVisible) {
      return
    }

    this.setState({
      heatmapPoints: [...this.state.heatmapPoints, { lat, lng }]
    })
    if (this._googleMap !== undefined) {
      const point = new google.maps.LatLng(lat, lng)
      this._googleMap.heatmap.data.push(point)
    }
  }

  toggleHeatMap() {
    this.setState({
      heatmapVisible: !this.state.heatmapVisible
    }, () => {
      if (this._googleMap !== undefined) {
        this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
      }
    })

  }

  render() {

    const apiKey = { key: process.env.REACT_APP_GOOGLE_API_KEY }
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.6
      }
    }

    console.log(this.state)

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          ref={(el) => this._googleMap = el}
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
          onClick={this.onMapClick.bind(this)}
        >
        </GoogleMapReact>
        {/* <button className="toggleButton" onClick={this.toggleHeatMap.bind(this)}>Toggle heatmap</button> */}
      </div>
    )
  }
}

export default HeatMap