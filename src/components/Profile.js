import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'


import ScriptList from './ScriptList'
import LoggedOut from '../nav/LoggedOut'



class Profile extends React.Component {

  // TODO: Build this page out to display a user's created scripts and the calls
  // they have made.
  // TODO: Allow users to delete or edit their own scripts
  // TODO: Allow users to duplicate scripts that already exist so that they can
  // edit and post their own versions easily

  render () {
    return (
      <div>
      {!localStorage.getItem('jwt') ?
        <LoggedOut />
        :
        <ScriptList />
      }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })



export default withRouter(connect(mapStateToProps)(Profile))
