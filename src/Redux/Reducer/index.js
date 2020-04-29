import {combineReducers} from 'redux';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Verify from './Auth/Verify';
import MakeSecurity from './Auth/CreateSecurityCode';
import UserDetails from './ReducerUser';
import TopUp from './TopUp';
import Cash from './Cash';
import TransferPaylive from './TransferPaylive';

const allReducers = combineReducers({
  Login,
  Register,
  Verify,
  MakeSecurity,
  UserDetails,
  TopUp,
  Cash,
  TransferPaylive,
});

export default allReducers;
