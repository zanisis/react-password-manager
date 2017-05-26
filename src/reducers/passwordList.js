import {FECTH_PASS, ADD_PASS, DELETE_PASS, EDIT_PASS, SEARCH_PASS} from '../constants'

const fetchPass = (data)=>{
  return data
}

const addPass = (state, data)=>{
  let newData = [...state, data]
  return newData
}

const deletePass = (state, id)=>{
  let newData = [...state].filter(data => data.id !== id)
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

const searchPass = (state, payload)=>{
  let oldData = [...state]
  let dataBase = payload.response
  let tmp = `${payload.search}`;
  let gex = new RegExp(tmp, 'i');
  let newData = dataBase.filter( data =>{
    let filter = data.username.match(gex)
    if(filter !== null){
      return data
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
    case SEARCH_PASS: return searchPass(state, actions.payload)
    default: return state
  }
}

export default passwordList