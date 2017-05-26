import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS, SEARCH_PASS} from '../constants'
import axios from 'axios'

export const fetchPass = ()=>{
  console.log('jalan nin');
  return dispatch =>
  axios.get('http://localhost:4000/password')
  .then(response =>{
    return dispatch({
      type: FECTH_PASS,
      payload: response.data
    })
  })
}

export const savePassword = (data)=>{
  return dispatch =>
  axios.post('http://localhost:4000/password', data)
  .then(response =>{
    return dispatch({
      type : ADD_PASS,
      payload : data
    })
  })
}

export const deletePassword = (id)=>{
  return dispatch =>
  axios.delete('http://localhost:4000/password/'+id)
  .then(response =>{
    return dispatch({
      type : DELETE_PASS,
      payload : id
    })
  })
}

export const editPassword = (data)=>{
  return dispatch =>
  axios.patch('http://localhost:4000/password/'+data.id, {
    username : data.username,
    password : data.password,
  })
  .then(response => {
    return dispatch({
      type : EDIT_PASS,
      payload : data
    })
  })
}

export const filterPass = (data)=>{
return dispatch => {
  axios.get('http://localhost:4000/password')
  .then(response =>{
    return dispatch({
    type : SEARCH_PASS,
    payload : {
      search :data,
      response : response.data
      }
    })
  })

  }
}