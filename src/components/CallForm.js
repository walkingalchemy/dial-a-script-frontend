import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, TextArea, Segment, Header, Container, Grid } from 'semantic-ui-react'

import adapter from '../adapter'
import { createCall } from '../actions/call'

class CallForm extends React.Component {

  // TODO: Change call link to use something like Twilio API to create more
  // robust phone calling ability.
  // TODO: Get call link click to keep user on this app and begin duration stopwatch
  // TODO: Possibly extend Org/Office/Phone model to have a Person model that 
  // could be created with the Who answered input

  state = {
    who: "",
    note: "",
    outcome: null,
    duration: 1
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.currentScript)
    let params = {
      ...this.state,
      phone: this.props.currentScript.phones[0].id,
      script: this.props.currentScript.id
    }
    console.log(params)
    this.props.createCall(params)
    .then(() => this.props.history.push('/call'))
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Input type="text" name="who" placeholder="Who answered the call?" value={this.state.who} onChange={this.onInputChange}/>
      <Form.Field control={TextArea} name="note" placeholder="Call Notes" value={this.state.note} onChange={this.onInputChange}/>
      <p>Was the call successful?</p>
      <Form.Input type="radio" label="No" id="succcess-no" name="outcome" value="false" onChange={this.onInputChange}/>
      <Form.Input type="radio" label="Yes" id="success-yes" name="outcome" value="true" onChange={this.onInputChange}/>
      <Form.Button type="submit">Log Call</Form.Button>
    </Form>
  )}
}
const mapStateToProps = (state) => ({ auth: state.auth,  currentScript: state.scripts.currentScript })

export default withRouter(connect(mapStateToProps, { createCall })(CallForm))
