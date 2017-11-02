import React, { Component } from 'react';
import DisplayWindow from './DisplayWindow'
import axios from 'axios';
import Map from './map'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      countrycode: ""
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
    // concat a new array with both long and lat
    const location = [{lat}, {long}];

    let locations = location.map(() => {
      return axios({
        url: `http://api.geonames.org/countryCode?lat=${lat}&lng=${long}&username=jramonibz` // <- team url
      })
    })

    axios.all(locations)
         .then((results) => {
          console.log(results.data);
          const country = results.data;
          this.setState({
            countrycode: country
          });

         })
         .catch(error => {
            console.log(error);
          });


      this.setState({
        latitude: lat,
        longitude: long
      });

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
      <Map latitude={this.state.latitude} longitude={this.state.longitude} />
      <span>{this.state.latitude}</span>
      <span>{this.state.longitude}</span>
      <h2> The international Space Station is currently visible from: {this.state.countrycode}</h2>
      </div>
    );
  }
}

export default App;
