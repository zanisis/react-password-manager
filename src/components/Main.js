import React, {Component} from 'react'
import { Table, Button, Modal, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'

import {deletePassword, editPassword} from '../actions'

import Header from './Header'

export class MainBar extends Component {
  state = {
    open: false,
    data : {
      id : 0,
      username : '',
      password : '',
    }
  }

  handleCancelModal(status){
    let clearData ={
      open : status,
      data : {
        id : 0,
        username : '',
        password : ''
      }}
    this.setState(clearData)
  }

  handleDelete(data){
    this.props.deletePassword(data.id)
  }

  handleEdit(data){
    let newData = {
      open : true,
      data : data
    }
    this.setState(newData)
  }

  handleCreate(status){
    let bringData = this.state
    this.props.editPassword(bringData.data)

    this.setState({open : status})

  }

  handleChange(data){
    let newData = {data: {
      ...this.state.data
    }}
    newData.data[data.name] = data.value
    this.setState(newData)
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
    const { listPassword = [] } = this.props
    return(
      <div>
        <Header />
          <Table color='grey' inverted textAlign='center'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { listPassword.map(data => (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.username}</Table.Cell>
                  <Table.Cell>{data.password}</Table.Cell>
                  <Table.Cell>
                    <Button color='blue' icon='write' onClick={()=>this.handleEdit(data)} />
                    <Button style={{backgroundColor : 'red'}} icon='trash' onClick={()=>this.handleDelete(data)}/>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Modal dimmer='blurring' size='small' open={this.state.open}>
            <Modal.Header>
              Create Your Password
            </Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input value={this.state.data.username} name="username" onChange={(e)=>this.handleChange(e.target)}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" value={this.state.data.password} name="password" onChange={(e)=>this.handleChange(e.target)}/>
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

const mapStateToProps = state =>({
  listPassword : state.passList
})

const mapDispatchToProps = dispatch => ({
  deletePassword : id => dispatch(deletePassword(id)),
  editPassword : data => dispatch(editPassword(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainBar)