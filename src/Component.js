import Map, {GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';


const Container = React.createClass({
  getInitialState: function() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  },

  onMapMoved: function(props, map) {
    const center = map.center;
  },

  onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  onInfoWindowClose: function() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  },

  onMapClicked: function(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  },

  render: function() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClicked}
          onDragend={this.onMapMoved}
          latitude={this.props.latitude}
          longitude={this.props.longitude} />
    )
  }
});

export default Container

