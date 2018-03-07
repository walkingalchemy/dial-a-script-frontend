import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { setCurrentScript } from '../actions/script'

class ScriptCard extends React.Component {

  handleClick = () => {
    this.props.setCurrentScript(this.props.script)
  }

  render () {
    const path = `/script/${this.props.script.id}`
    return (
      <div id={`script-${this.props.script.id}`} key={this.props.script.id}>
        <h2> <Link to={path} onClick={this.handleClick}> {this.props.script.title}  </Link></h2>
        <p> {this.props.script.description} </p>
        <p> Called: {this.props.script.calls.length} times </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, allScripts: state.scripts.allScripts })



export default withRouter(connect(mapStateToProps, { setCurrentScript })(ScriptCard))
