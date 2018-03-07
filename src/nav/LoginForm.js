import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'
import { withRouter } from 'react-router-dom'
import { Form, Segment, Container, Header } from 'semantic-ui-react'

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
      <Container text>
      <Header as='h2' attached="top" inverted>Log In</Header>
      <Segment raised attached>
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Input label="Name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onInputChange}></Form.Input>
        <Form.Input label="Password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange}></Form.Input>
        <Form.Button type="submit">Login</Form.Button>
      </Form>
      </Segment>
      </Container>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LoginForm))
