import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class DisplayWindow extends Component {
  constructor() {
    super();
  }
  render() {
    return (

      <div className="lalocura">
      {this.props}
      </div>

    );
  }
}

export default DisplayWindow;
