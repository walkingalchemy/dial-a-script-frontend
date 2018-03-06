import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import adapter from '../adapter'
import { createCall } from '../actions/call'

class CallForm extends React.Component {

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
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="who" placeholder="Who answered the call?" value={this.state.who} onChange={this.onInputChange}/>
      <input type="text" name="note" placeholder="Call Notes" value={this.state.note} onChange={this.onInputChange}/>
      <p>Was the call successful?</p>
      <input type="radio" id="succcess-no" name="outcome" value="false" onChange={this.onInputChange}/>
      <label for="success-no">No</label>
      <input type="radio" id="success-yes" name="outcome" value="true" onChange={this.onInputChange}/>
      <label for="success-yes">Yes</label>
      <input type="submit" value="Log Call"/>
    </form>
  )}
}
const mapStateToProps = (state) => ({ auth: state.auth,  currentScript: state.scripts.currentScript })

export default withRouter(connect(mapStateToProps, { createCall })(CallForm))
