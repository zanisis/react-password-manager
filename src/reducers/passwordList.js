import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS} from '../constants'

const fetchPass = (data)=>{
  return data
}

const addPass = (state, data)=>{
  let newData = [...state, data]
  return newData
}

const passwordList = (state=[], actions)=>{
  switch (actions.type) {
    case FECTH_PASS: return fetchPass(actions.payload)
    case ADD_PASS: return addPass(state, actions.payload)
    case DELETE_PASS: return state
    case EDIT_PASS: return state
    default: return state
  }
}

export default passwordList