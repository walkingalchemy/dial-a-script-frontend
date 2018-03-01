import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Profile from '../components/Profile'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </nav>
    );
  }
}

export default NavBar;
