import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS} from '../constants'
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