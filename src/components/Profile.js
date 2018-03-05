import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'


import ScriptContainer from './ScriptContainer'



class Profile extends React.Component {

  render () {
    return (
      <div>
      {!this.props.auth.name ?
        <h1>Please Log In or Sign Up</h1>
        :
        <ScriptContainer />
      }
      
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })



export default withRouter(connect(mapStateToProps)(Profile))
