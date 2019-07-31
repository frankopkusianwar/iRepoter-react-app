import { combineReducers } from 'redux';
import signupReducer from './SignupReducer';
import signinReducer from './SigninReducer';
import redflagReducer from './RedFlagReducer';

export default combineReducers({
  signupReducer,
  signinReducer,
  redflagReducer,
});
