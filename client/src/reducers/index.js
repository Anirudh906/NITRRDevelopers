import { combineReducers } from 'redux';
import alertRed from './alert';
import auth from './auth';
import profile from './profile';
export default combineReducers({
    alertRed, auth, profile
});