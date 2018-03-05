import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import adapter from '../adapter'
import Prompter from './Prompter'
import PhoneList from './PhoneList'

class CallScript extends React.Component {

  render () {
    console.log(this.props.currentScript)
    return (
      <div>
        <h1> Dial-a-Script </h1>
        <h3>{this.props.currentScript.title}</h3>
        <h5>{this.props.currentScript.description}</h5>
        <Prompter body={this.props.currentScript.body} />
        <PhoneList phones={this.props.currentScript.phones}/>
        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, currentScript: state.currentScript.currentScript }
}



export default withRouter(connect(mapStateToProps, {  })(CallScript))
