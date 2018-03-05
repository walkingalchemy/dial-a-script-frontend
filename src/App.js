import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import NavBar from './nav/NavBar'
import LoggedOut from './nav/LoggedOut'
import Profile from './components/Profile'
import LoginForm from './nav/LoginForm'
import SignupForm from './nav/SignupForm'
import CallScript from './components/CallScript'
import ScriptList from './components/ScriptList'
import ScriptContainer from './components/ScriptContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() =>
            {
              return localStorage.getItem('jwt') ? <Redirect to="/profile" /> : <LoggedOut />
            }
          }/>
          <Route exact path="/profile" render={() =>
            {
              return localStorage.getItem('jwt') ? <Profile /> : <LoggedOut />
            }
          }/>
          <Route exact path="/create" render={() =>
            {
              return localStorage.getItem('jwt') ? <ScriptContainer /> : <LoggedOut />
            }
          }/>
          <Route exact path="/script" render={() =>
            {
              return localStorage.getItem('jwt') ? <CallScript /> : <LoggedOut />
            }
          }/>
          <Route exact path="/discover" render={() =>
            {
              return localStorage.getItem('jwt') ? <ScriptList /> : <LoggedOut />
            }
          }/>
          // Login/Signup
          <Route exact path="/login" render={() =>
            {
              return localStorage.getItem('jwt') ? <Redirect to="/"/> : <LoginForm />
            }
          } />
          <Route exact path="/signup" render={() =>
            {
              return localStorage.getItem('jwt') ? <Redirect to="/"/> : <SignupForm />
            }
          } />
        </Switch>
      </div>
    );
  }
}
export default withRouter(connect((state) => ({ auth: state.auth }))(App))