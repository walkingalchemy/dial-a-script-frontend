import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/user'
import { withRouter } from 'react-router-dom'
import { Form, Segment, Container, Header } from 'semantic-ui-react'

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
      .then(() => this.props.history.push('/'))
    } else {
      alert("Password must match confirmation")
    }
  }

  render() {
    return(
      <Container text>
      <Header as='h2' attached="top" inverted>Sign Up</Header>
      <Segment raised attached>
      <Form onSubmit={this.handleSignupSubmit}>
        <Form.Input label="Name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onInputChange}></Form.Input>
        <Form.Input label="Password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange}></Form.Input>
        <Form.Input name="passwordConfirmation" type="password" placeholder="Confirm Password" value={this.state.passwordConfirmation} onChange={this.onInputChange}></Form.Input>
        <Form.Button type="submit">Signup</Form.Button>
      </Form>
      </Segment>
      </Container>
    )
  }
}

export default withRouter(connect(null, { signupUser })(SignupForm))
