import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import adapter from '../adapter'
import { createScript } from '../actions/script'

class ScriptContainer extends React.Component {
  state = {
    title: "",
    body: "",
    phone: "",
    description: "",
    office: "",
    organization: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createScript(
      {
        ...this.state,
        user_id: this.props.auth.currentUserId
      })
      .then(() => this.props.history.push('/'))
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <h1> Create-a-Script </h1>
        <form onSubmit={this.handleSubmit}>
          <label >Title</label>
          <input id="title" value={this.state.title} name="title" type="text" placeholder="Give us a title" onChange={this.onInputChange} required maxLength="255"/><br/>
          <label >Script</label>
          <input id="script" value={this.state.body} name="body" type="textarea" placeholder="Write your script here..." onChange={this.onInputChange} required/><br/>
          <label >Call to Action</label>
          <input id="description" value={this.state.description} name="description" type="text" placeholder="Tell others why they should call!" onChange={this.onInputChange} required/><br/>
          <label >Phone Number</label>
          <input id="phone" value={this.state.phone} name="phone" type="tel" placeholder="xxx-xxx-xxxx" onChange={this.onInputChange} required pattern="[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}"/><br/>
          <label >Office</label>
          <input id="office" value={this.state.office} name="office" type="text" placeholder="Office title" onChange={this.onInputChange} required /><br/>
          <label >Organization</label>
          <input id="organization" value={this.state.organization} name="organization" type="text" placeholder="Organization name" onChange={this.onInputChange} required /><br/>
          <input type="submit" value="Save Script" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, currentScript: state.currentScript })



export default withRouter(connect(mapStateToProps, { createScript })(ScriptContainer))
