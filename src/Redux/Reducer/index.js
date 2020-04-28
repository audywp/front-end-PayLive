import {combineReducers} from 'redux';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Verify from './Auth/Verify';
import MakeSecurity from './Auth/CreateSecurityCode';
import SecurityCheck from './Auth/SecurityChekc';
import UserDetails from './ReducerUser';
import TopUp from './TopUp';
import Cash from './Cash';

const allReducers = combineReducers({
  Login,
  Register,
  Verify,
  MakeSecurity,
  SecurityCheck,
  UserDetails,
  TopUp,
  Cash,
});

export default allReducers;
