import {combineReducers} from 'redux'

import passList from './passwordList'

const rootReducer = combineReducers({
  passList : passList,
})

export default rootReducer