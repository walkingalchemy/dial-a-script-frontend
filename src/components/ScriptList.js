import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import adapter from '../adapter'

class ScriptList extends React.Component {

  render () {
    return (
      <div>
        <h1> Discover-a-Script </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}



export default withRouter(connect(mapStateToProps, {  })(ScriptList))
