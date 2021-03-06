import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (

  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.passedProps.latitude, lng: props.passedProps.longitude }}>
    <Marker position={{ lat: props.passedProps.latitude, lng: props.passedProps.longitude }} />
  </GoogleMap>
));

const enhance = _.identity;


const ReactGoogleMaps = (props) => [
  <MyMapComponent key="map" passedProps={props} />
];

export default enhance(ReactGoogleMaps);
