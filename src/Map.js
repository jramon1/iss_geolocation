import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export class Map extends React.Component {

  //Since our component is based upon Google's api, way to be confident our component has changed
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = this.props.latitude;
      let lng = this.props.latitude;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

export default Map
　 　 　
