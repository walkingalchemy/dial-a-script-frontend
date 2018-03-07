import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, TextArea, Segment, Header, Container, Grid } from 'semantic-ui-react'

import { createScript } from '../actions/script'

class NewScriptForm extends React.Component {
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
      })
      .then((scriptData) => this.props.history.push(`/script/${scriptData.id}`))
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Header as='h1' attached="top" inverted>Create-A-Script</Header>
        <Segment raised attached>
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={10}>
                  <Form.Input label="Script Title" id="title" value={this.state.title} name="title" type="text" placeholder="Give us a title" onChange={this.onInputChange} required maxLength="255"/><br/>
                  <Form.Field label="Write Your Script Here" control={TextArea} rows="18" autoHeight id="script" value={this.state.body} name="body" type="textarea" placeholder="Write your script here..." onChange={this.onInputChange} required/><br/>
                </Grid.Column>
                <Grid.Column width={6} textAlign="right">
                  <Form.Field label="Call to Action" control={TextArea} rows="3" autoHeight id="description" value={this.state.description} name="description" type="text" placeholder="Tell others why they should call!" onChange={this.onInputChange} required/><br/>
                  <Form.Input label="Phone Number" id="phone" value={this.state.phone} name="phone" type="tel" placeholder="xxx-xxx-xxxx" onChange={this.onInputChange} required pattern="[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}"/><br/>
                  <Form.Input label="Office" id="office" value={this.state.office} name="office" type="text" placeholder="Office title, location or branch" onChange={this.onInputChange} required /><br/>
                  <Form.Input label="Organization" id="organization" value={this.state.organization} name="organization" type="text" placeholder="Organization name" onChange={this.onInputChange} required /><br/>
                  <Form.Button type="submit">Save Script</Form.Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, currentScript: state.scripts.currentScript })



export default withRouter(connect(mapStateToProps, { createScript })(NewScriptForm))
