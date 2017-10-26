import React, { Component } from 'react';
import DisplayWindow from './DisplayWindow'
import axios from 'axios';
import GoogleMap from './Component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0
    }
    this.displayLocation = this.displayLocation.bind(this);
  }

  requestData = () => {
    const url = "http://api.open-notify.org/iss-now.json";
      axios.get(url)
    .then((response) => {
      console.log(response.data);
      const lat = response.data.iss_position.latitude;

      const long = response.data.iss_position.longitude;

      console.log(lat, long);
      this.setState({
        latitude: lat,
        longitude: long
      });

      console.log("yo check dis out,-->", this.state.latitude);
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.intervalId = window.setInterval( this.requestData, 1000 );
  }
  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  displayLocation(lat, long) {
    console.log("long and lat enit", lat, long)
  }

  render() {
    return (
      <div className="App">
      <GoogleMap latitude={this.state.latitude} longitude={this.state.longitude} />
      <span>{this.state.latitude}</span>
      <span>{this.state.longitude}</span>
      </div>
    );
  }
}

export default App;
