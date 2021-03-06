import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Segment, Header, Container, Grid, Card } from 'semantic-ui-react'

import { getScripts } from '../actions/script'
import ScriptCard from './ScriptCard'

class ScriptList extends React.Component {

  // TODO: add filtering, searching and sorting to this page to allow surfacing
  // of relevant and worthwhile scripts
  // TODO: Possibly use users' scripts and call history to surface "scripts
  // you might be interested in"
  componentDidMount = () => {
    this.props.getScripts()
  }

  render () {
    const scriptCards = this.props.allScripts.map( (script) => {
      return <ScriptCard script={script}/>
  })
    return (
      <div>
      <Header as="h1" attached="top" inverted> Discover-a-Script </Header>
      <Segment attached>
        <Card.Group>
        {scriptCards}
        </Card.Group>
      </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, allScripts: state.scripts.allScripts })



export default withRouter(connect(mapStateToProps, { getScripts })(ScriptList))
