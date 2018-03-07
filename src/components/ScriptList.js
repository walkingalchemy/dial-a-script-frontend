import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getScripts } from '../actions/script'
import ScriptCard from './ScriptCard'

class ScriptList extends React.Component {

  componentDidMount = () => {
    this.props.getScripts()
  }

  render () {
    const scriptCards = this.props.allScripts.map( (script) => {
      return <ScriptCard script={script}/>
  })
    return (
      <div>
        <h1> Discover-a-Script </h1>
        {scriptCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, allScripts: state.scripts.allScripts })



export default withRouter(connect(mapStateToProps, { getScripts })(ScriptList))
