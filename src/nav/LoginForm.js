import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    name: "",
    password: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.name, this.state.password)
    .then(() => this.props.history.push('/'))
  }

  render() {
    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onInputChange}></input>
        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LoginForm))
