import React, {Component} from 'react'
import { Segment, Input, Menu, Icon, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'


import Header from './Header'

class MainBar extends Component {
  render(){
    console.log('dimain', this.props.listPassword)
    return(
      <div>
        <Header />
      </div>
    )
  }
}

const mapStateToProps = state =>({
  listPassword : state.passList
})

export default connect(mapStateToProps, null)(MainBar)