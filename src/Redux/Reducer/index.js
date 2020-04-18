import { combineReducers } from 'redux'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Verify from './Auth/Verify'
const allReducers = combineReducers({
  Login, Register, Verify
})

export default allReducers
