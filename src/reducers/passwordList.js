import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS} from '../constants'

const passwordList = (state={}, actions)=>{
  switch (actions.type) {
    case FECTH_PASS: return state
    case ADD_PASS: return state
    case DELETE_PASS: return state
    case EDIT_PASS: return state
    default: return state
  }
}

export default passwordList