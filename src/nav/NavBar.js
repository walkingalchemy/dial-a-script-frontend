import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



import { logoutUser } from '../actions/user'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Create-a-Script</Link>
        <Link to="/scripts">Discover-a-Script</Link>

        
        <div>
          {this.renderLogoutButton()}
        </div>
      </nav>
    );
  }
  
  renderLogoutButton = () => {
    if(this.props.auth.name) {
        return <button onClick={this.props.logoutUser } >Log Out</button>
    }
  }
  
}

export default withRouter(connect((state) => ({ auth: state.auth }), { logoutUser })(NavBar));
