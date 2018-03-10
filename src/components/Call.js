import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Form, TextArea, Segment, Header, Container, Grid } from 'semantic-ui-react'

class Call extends React.Component {

  // BUG: Currently currentCall.office.title is somehow being set to the same
  // value as currentCall.script.title instead of the actuall office title text

  render () {
    const path = `/script/${this.props.currentScript.id}`
    let outcome
      if(this.props.currentCall.outcome === "true"){
        outcome = "successful"
      }else{
      outcome = "unsuccessful"
      }
    return(
      <div>
      <Container text>
        <Header as="h2" attached="top" inverted>Call Log</Header>
        <Segment attached>
        <h3>Phone Number: {this.props.currentCall.phone.digits}</h3>
        <p>{this.props.currentCall.user.name} used <Link to={path}>{this.props.currentCall.script.title} </Link> to call {this.props.currentCall.organization.name} at their {this.props.currentCall.office.title} office.</p>
        <p>They spoke to {this.props.currentCall.who} and the call was { outcome }.</p>
        <h5>{this.props.currentCall.user.name}'s Notes from the Call:</h5>
        <p>{this.props.currentCall.note}</p>

        </Segment>
        </Container>
      </div>
  )}
}
const mapStateToProps = (state) => ({ auth: state.auth,  currentScript: state.scripts.currentScript, currentCall: state.calls.currentCall })

export default withRouter(connect(mapStateToProps, {})(Call))
