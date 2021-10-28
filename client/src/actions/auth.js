import axios from 'axios';
import toast from 'react-hot-toast' 
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

export const register = (props) => async dispatch => {
   const {name, email, password} = props;
    const config = {
      headers:{
          'Content-Type': 'application/json'
      }
  }
  const body = JSON.stringify({name, email, password });

 try {
     const res = await axios.post('/api/users', body, config);

     dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data
     });
 } catch(err){
     const errors = err.response.data.errors;
     
     if(errors){
         errors.forEach(error => {toast.error(error.msg); dispatch(setAlert(error.msg, 'danger', 5000))});
     }
      dispatch({
          type: REGISTER_FAIL
      }); 
 }
}