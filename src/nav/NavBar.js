import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'


import { logoutUser } from '../actions/user'

class NavBar extends Component {
  state = { activeItem: ''}
  
  handleMenuClick = (e, { name }) => this.setState({activeItem: name })
  
  render() {
      const { activeItem } = this.state
      
      if(localStorage.getItem('jwt')) {
        return (
          <Menu pointing inverted>
            <Menu.Item name="profile" active={activeItem === "profile"} onClick={this.handleMenuClick}><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item name="create" active={activeItem === "create"} onClick={this.handleMenuClick}><Link to="/create">Create-A-Script</Link></Menu.Item>
            <Menu.Item name="discover" active={activeItem === "discover"} onClick={this.handleMenuClick}><Link to="/discover">Discover-a-Script</Link></Menu.Item>
          <Menu.Menu inverted position='right'>
            {this.renderLogoutButton()}
          </Menu.Menu>
        </Menu>
    )} else {
      return(<Menu pointing inverted>
        <Menu.Item name="login" active={activeItem === "login"} onClick={this.handleMenuClick}><Link to="/login">Log In</Link></Menu.Item>
        <Menu.Item name="signup" active={activeItem === "signup"} onClick={this.handleMenuClick}><Link to="/signup">Sign Up</Link></Menu.Item>
      </Menu>
    )}
  }
  
  renderLogoutButton = () => {
    if(localStorage.getItem('jwt')) {
        return (
          <Button animated onClick={this.props.logoutUser } >
            <Button.Content visible>Log Out</Button.Content>
            <Button.Content hidden>
              <Icon name='sign out' />
            </Button.Content>
          </Button>
    )}
  }
  
}

export default withRouter(connect((state) => ({ auth: state.auth }), { logoutUser })(NavBar));
