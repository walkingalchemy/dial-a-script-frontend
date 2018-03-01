import React from 'react'
import { connect } from 'react-redux'

import ScriptContainer from './ScriptContainer'

class Profile extends React.Component {

  render () {
    return (
      <div>
      {!this.props.name ?
        <h1>Please Log In or Sign Up</h1>
        :
        <ScriptContainer />
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ name: state.usersReducer.name })



export default connect(mapStateToProps)(Profile)
