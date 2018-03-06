import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Call extends React.Component {

  render () {
    return(
      <div>
        <h2>Call Log</h2>
        <h4>Phone Number: {this.props.currentCall.phone.digits}</h4>
        <p>{this.props.currentCall.user.name} called {this.props.currentCall.organization.name} at their {this.props.currentCall.office.title} office.</p>
        <p>The call used the script {this.props.currentCall.script.title} and talked to {this.props.currentCall.who}.</p>
      </div>
  )}
}
const mapStateToProps = (state) => ({ auth: state.auth,  currentScript: state.scripts.currentScript, currentCall: state.calls.currentCall })

export default withRouter(connect(mapStateToProps, {})(Call))
