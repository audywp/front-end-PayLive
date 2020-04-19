import { combineReducers } from 'redux'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Verify from './Auth/Verify'
import MakeSecurity from './Auth/CreateSecurityCode'
import SecurityCheck from './Auth/SecurityChekc'
const allReducers = combineReducers({
  Login, Register, Verify, MakeSecurity, SecurityCheck
})

export default allReducers
