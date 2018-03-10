import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

import { setCurrentScript } from '../actions/script'

class ScriptCard extends React.Component {

  // TODO: Add visual display of calls over time and success rate for each scriptcard
  
  handleClick = (e) => {
    e.preventDefault()
    this.props.setCurrentScript(this.props.script)
    this.props.history.push(`/script/${this.props.script.id}`)
  }

  render () {
    const path = `/script/${this.props.script.id}`
    const orgs = this.props.script.organizations.map( org => <Card.Meta>{org.name} @ {this.props.script.offices[0].title}</Card.Meta>)
    return (
      <Card href={path} onClick={this.handleClick} id={`script-${this.props.script.id}`} key={this.props.script.id}>
        <Card.Content>
        <Card.Header> {this.props.script.title} </Card.Header>
        <Card.Description> {this.props.script.description} </Card.Description>
        <h5>For contacting:</h5>
        {orgs}
        </Card.Content>
        <Card.Content extra>
        <Card.Meta> Called: {this.props.script.calls.length} times </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, allScripts: state.scripts.allScripts })



export default withRouter(connect(mapStateToProps, { setCurrentScript })(ScriptCard))
