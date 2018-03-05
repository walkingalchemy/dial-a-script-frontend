import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import NavBar from './nav/NavBar'
import Profile from './components/Profile'
import LoginForm from './nav/LoginForm'
import SignupForm from './nav/SignupForm'
import CallScript from './components/CallScript'
import ScriptList from './components/ScriptList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path='/script' component={CallScript}/>
        <Route exact path='/scripts' component={ScriptList}/>
        
      </div>
    );
  }
}

export default App;
