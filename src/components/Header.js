import React, {Component} from 'react'
import { Segment, Input, Menu, Icon, Image, Button, Modal, Form, Popup } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


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

  handleModal(status){
    this.setState({open: status})
  }

  handleCancelModal(status){
    this.setState({open: status})
  }


  render(){
    const { activeItem } = this.state

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
                name="searchWord" placeholder='Search Fav Artist' onChange={this.handleInputSearchs}/>
              </Menu.Item>
            </Menu>
          </Segment>

          <Modal dimmer='blurring' size='small' open={this.state.open}>
            <Modal.Header>
              Create Your Password
            </Modal.Header>
            <Modal.Content>
              <Form>
                <Input />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={()=>this.handleCancelModal(false)}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Update' onClick={()=>this.handleUpdate()}/>
            </Modal.Actions>
          </Modal>
        </div>
    )
  }
}

export default HeaderBar