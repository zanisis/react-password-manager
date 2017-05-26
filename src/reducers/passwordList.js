import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS} from '../constants'

const fetchPass = (data)=>{
  return data
}

const addPass = (state, data)=>{
  let newData = [...state, data]
  return newData
}

const deletePass = (state, id)=>{
  let newData = [...state].filter(data => data.id !== id)
  console.log(newData, 'reducer')
  return newData
}

const editPas = (state, data)=>{
  let newData = [...state].map(item =>{
    if(data.id === item.id ){
      item['username'] = data.username
      item['password'] = data.password
      return item
    } else {
      return item
    }
  })
  return newData
}

const passwordList = (state=[], actions)=>{
  switch (actions.type) {
    case FECTH_PASS: return fetchPass(actions.payload)
    case ADD_PASS: return addPass(state, actions.payload)
    case DELETE_PASS: return deletePass(state, actions.payload)
    case EDIT_PASS: return editPas(state, actions.payload)
    default: return state
  }
}

export default passwordList