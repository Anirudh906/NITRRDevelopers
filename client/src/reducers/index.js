import { combineReducers } from 'redux';
import alertRed from './alert';
import auth from './auth';
export default combineReducers({
    alertRed, auth
});