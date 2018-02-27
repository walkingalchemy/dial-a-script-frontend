import React from 'react'
import { connect } from 'react-redux'

import { showUser } from '../actions/user'

class Profile extends React.Component {
  handleClick = () => {
    this.props.showUser(1)
  }

  render () {
    return (
      <div>
      <h1>Hello, {this.props.name}</h1>
      <button onClick={this.handleClick}> Test </ button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ name: state.usersReducer.name })



export default connect(mapStateToProps, { showUser })(Profile)
