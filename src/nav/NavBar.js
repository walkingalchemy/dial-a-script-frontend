import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



import { logoutUser } from '../actions/user'

class NavBar extends Component {
  render() {
      if(localStorage.getItem('jwt')) {
        return (<nav>
          <Link to="/profile">Profile</Link>
          <Link to="/create">Create-A-Script</Link>
          <Link to="/discover">Discover-a-Script</Link>

          
          <div>
            {this.renderLogoutButton()}
          </div>
        </nav>
    )} else {
      return(<nav>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    )}
  }
  
  renderLogoutButton = () => {
    if(localStorage.getItem('jwt')) {
        return <button onClick={this.props.logoutUser } >Log Out</button>
    }
  }
  
}

export default withRouter(connect((state) => ({ auth: state.auth }), { logoutUser })(NavBar));
