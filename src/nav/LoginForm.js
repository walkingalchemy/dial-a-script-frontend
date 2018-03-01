import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'

class LoginForm extends React.Component {
  state = {
    name: "",
    password: ""
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.name, this.state.password)
  }

  render() {
    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}></input>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default connect(null, { loginUser })(LoginForm)
