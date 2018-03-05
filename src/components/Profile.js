import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'


import ScriptList from './ScriptList'
import LoggedOut from '../nav/LoggedOut'



class Profile extends React.Component {

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
