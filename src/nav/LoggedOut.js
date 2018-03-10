import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Segment, Container, Header } from 'semantic-ui-react'

class LoggedOut extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2" attached="top" inverted>Welcome to Dial-A-Script</Header>
        <Segment attached>

        <h3>Please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>!</h3>
        </Segment>
      </Container>
    );
  }

}

export default withRouter(connect((state) => ({ auth: state.auth }))(LoggedOut));
