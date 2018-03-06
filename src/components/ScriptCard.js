import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ScriptCard extends React.Component {

  render () {
    return (
      <div id={`script-${this.props.script.id}`} key={this.props.script.id}>
        <h2> {this.props.script.title}  </h2>
        <p> {this.props.script.description} </p>
        <p> Called: {this.props.script.calls.length} times </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, allScripts: state.scripts.allScripts })



export default withRouter(connect(mapStateToProps, { })(ScriptCard))
