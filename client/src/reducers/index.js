import { combineReducers } from 'redux';
import alertRed from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
export default combineReducers({
    alertRed, auth, profile, post
});