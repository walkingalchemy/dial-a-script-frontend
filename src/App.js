import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import NavBar from './nav/NavBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
