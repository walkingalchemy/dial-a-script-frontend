import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Form, TextArea, Segment, Header, Container, Grid } from 'semantic-ui-react'

import adapter from '../adapter'
import Prompter from './Prompter'
import PhoneList from './PhoneList'
import CallForm from './CallForm'

class CallScript extends React.Component {

  // TODO: Render script itself using formatting info from rich text or Markup
  // form in NewScriptForm

  render () {
    return (
      <div>
      <Header as='h1' attached="top" inverted>Dial-A-Script</Header>
      <Segment attached>
        <Grid>
        <Grid.Column width={10}>
        <Header as='h2' attached="top" inverted>{this.props.currentScript.title}</Header>
        <Segment attached>
          <Prompter body={this.props.currentScript.body} />
        </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
        <Header as='h3' attached="top" inverted>Call to Action</Header>
        <Segment attached>
          <h5>{this.props.currentScript.description}</h5>
        </Segment>
        <PhoneList phones={this.props.currentScript.phones}/>
        <CallForm />
        </Grid.Column>

        </Grid>
      </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, currentScript: state.scripts.currentScript }
}



export default withRouter(connect(mapStateToProps, {  })(CallScript))
