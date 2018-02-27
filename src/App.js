import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        </div>
        
      </div>
    );
  }
}

export default App;
