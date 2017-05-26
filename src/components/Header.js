import React, {Component} from 'react'
import { Segment, Input, Menu, Icon, Image, Button, Modal, Form, Popup } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {savePassword} from '../actions'


import logo from '../logo.svg';
import '../App.css';

class HeaderBar extends Component {
  state = {
    activeItem: 'home',
    iconName: 'search',
    searchWord: '',
    open: false,
    data:{
      username:'',
      password:'',
    },
  }

  handleChange(data){
    let newData = {data: {
      ...this.state.data
    }}
    newData.data[data.name] = data.value
    this.setState(newData)
  }

  handleModal(status){
    this.setState({open: status})
  }

  handleCancelModal(status){
    let clearData ={
      open : status,
      data : {
        username : '',
        password : ''
      }}
    this.setState(clearData)
  }

  handleCreate(){
    let pwd = this.state.data.password
    let upperCase = /[A-Z]/.test(pwd)
    let lowerCase = /[a-z]/.test(pwd)
    let specialCase = /[^a-zA-Z0-9]/.test(pwd)
    let numberCase = /[0-9]/.test(pwd)
    let lengthCase = pwd.length >= 5
    let isValid = upperCase && lowerCase && specialCase && numberCase && lengthCase

    if(isValid){
      let {data} = this.state
      let newPassword = {
        id : Number(new Date()),
        ...data
      }
      this.props.savePassword(newPassword)
      this.setState({open: false,
        data : {
        username : '',
        password : '',
      }})
    } else {
      alert('Password is to be spesific')
    }
  }

  renderValidationText(type, text){
      let pwd = this.state.data.password
      let upperCase = type === 1 && /[A-Z]/.test(pwd)
      let lowerCase = type === 2 && /[a-z]/.test(pwd)
      let specialCase = type === 3 && /[^a-zA-Z0-9]/.test(pwd)
      let numberCase = type === 4 && /[0-9]/.test(pwd)
      let lengthCase = type === 5 && pwd.length >= 5
      let result = upperCase || lowerCase || specialCase || numberCase || lengthCase

      const style = {
        textDecoration: result ? 'line-through' : ''
      }

      return(
        <h3 style={style}>
          {text}
        </h3>
      )
  }


  render(){
    const { activeItem } = this.state
    console.log(this.state.data);
    return(
        <div>
          <Segment inverted>
            <Menu inverted secondary>
              <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} color='olive'/>
              <Image src={logo} className="App-logo"/>
              <Menu.Item position="right">
                <Popup
                  trigger={<Button  color='red' compact content='Create Password' onClick={()=>this.handleModal(true)}/>}
                  content='Create Your Password'
                  position='bottom right'
                  style={{width:'17rem'}}
                />
                <Input style={{marginLeft: 3, width:'14rem'}} icon={<Icon name={this.state.iconName} inverted circular link onClick={this.handleClickSearch}/>}
                name="searchWord" placeholder='Search By Username' onChange={this.handleInputSearchs}/>
              </Menu.Item>
            </Menu>
          </Segment>

          <Modal dimmer='blurring' size='small' open={this.state.open}>
            <Modal.Header>
              Create Your Password
            </Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input name="username" placeholder='UserName' onChange={(e)=>this.handleChange(e.target)}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" name="password" placeholder='Password' onChange={(e)=>this.handleChange(e.target)}/>
                </Form.Field>
              </Form>
              <div>
              <h3>Password Strength</h3>
              {this.renderValidationText(1, 'Password harus memiliki setidaknya satu karakter huruf besar (upper-case)')}
              {this.renderValidationText(2, 'Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)')}
              {this.renderValidationText(3, 'Password harus memiliki setidaknya satu karakter spesial(#$@!&%...)')}
              {this.renderValidationText(4, 'Password harus memiliki setidaknya satu angka')}
              {this.renderValidationText(5, 'Password harus memiliki panjang (length) lebih dari 5 karakter')}
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={()=>this.handleCancelModal(false)}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Submit' onClick={()=>this.handleCreate(false)}/>
            </Modal.Actions>
          </Modal>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  savePassword : data => dispatch(savePassword(data))
})

export default connect(null, mapDispatchToProps)(HeaderBar)