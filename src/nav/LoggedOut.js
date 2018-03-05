import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class LoggedOut extends Component {
  render() {
    return (
      <div>
      <h2>Welcome to Dial-A-Script</h2>
      <h3>Please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>!</h3>
      </div>
    );
  }
  
}

export default withRouter(connect((state) => ({ auth: state.auth }))(LoggedOut));
