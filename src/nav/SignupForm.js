import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/user'

class SignupForm extends React.Component {
  state = {
    name: "",
    password: "",
    passwordConfirmation: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignupSubmit = (event) => {
    event.preventDefault()
    if (!this.state.name) {
      alert("Name must be filled in")
    }
    if (this.state.password && this.state.password === this.state.passwordConfirmation) {
      this.props.signupUser(this.state.name, this.state.password)
    } else {
      alert("Password must match confirmation")
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSignupSubmit}>
        <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onInputChange}></input>
        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange}></input>
        <input name="passwordConfirmation" type="password" placeholder="Confirm Password" value={this.state.passwordConfirmation} onChange={this.onInputChange}></input>
        <button type="submit">Signup</button>
      </form>
    )
  }
}

export default connect(null, { signupUser })(SignupForm)
