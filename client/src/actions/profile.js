import axios from 'axios';
import { setAlert } from './alert';
import toast from "react-hot-toast"; 
import {
    GET_PROFILE,
    GET_PROFILES, 
    PROFILE_ERROR,
    UPDATE_PROFILE,
    DELETE_ACCOUNT,
    CLEAR_PROFILE,
    GET_REPOS
} from './types';


export const currentProfile = () => async dispatch => {
   try{
       const res = await axios.get('/api/profile/me');

      dispatch({
          type: GET_PROFILE, 
          payload: res.data
      });
   } catch(err){
         dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status } 
         });
   } 
}


export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE }); 
  
  try{
       const res = await axios.get('/api/profile');

      dispatch({
          type: GET_PROFILES, 
          payload: res.data
      });
   } catch(err){
         dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status } 
         });
   } 
}


export const getProfileByID = (userId) => async dispatch => {
   dispatch({ type: CLEAR_PROFILE }); 
  try{
       const res = await axios.get(`/api/profile/user/${userId}`);

      dispatch({
          type: GET_PROFILE, 
          payload: res.data
      });
   } catch(err){
         dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status } 
         });
   } 
}

export const getGithubRepos = (username) => async dispatch => {
 
  try{
       const res = await axios.get(`/api/profile/github/${username}`);

      dispatch({
          type: GET_REPOS, 
          payload: res.data
      });
   } catch(err){
         dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status } 
         });
   } 
}


export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
         const config = {
             headers :{
                 'Content-Type': 'application/json'
             }
         }

         const res = await axios.post('/api/profile', formData, config);

        dispatch({
             type: GET_PROFILE,
             payload: res.data
         });
         if(edit){
             toast.success('Profile Updated');
         }else{
             toast.success("Profile Created");
         }
        dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', "success"));
        if(!edit){
            history.push('/dashboard');
        }

    }catch(err){
           const errors = err.response.data.errors;

           if (errors) {
             errors.forEach((error) => {
               toast.error(error.msg);
               dispatch(setAlert(error.msg, "danger", 5000));
             });
           }
          dispatch({
            type: PROFILE_ERROR,
            payload: {
              msg: err.response.statusText,
              status: err.response.status,
            },
          });

    }
}


export const addExp = (formData, history) => async dispatch => {
    try {
         const config = {
             headers :{
                 'Content-Type': 'application/json'
             }
         }

         const res = await axios.put('/api/profile/experience', formData, config);

        dispatch({
             type: UPDATE_PROFILE,
             payload: res.data
         });
        
       toast.success("Experience Added");
       dispatch(setAlert('Experience Added', "success"));
        history.push('/dashboard');
        

    }catch(err){
           const errors = err.response.data.errors;

           if (errors) {
             errors.forEach((error) => {
               toast.error(error.msg);
               dispatch(setAlert(error.msg, "danger", 5000));
             });
           }
          dispatch({
            type: PROFILE_ERROR,
            payload: {
              msg: err.response.statusText,
              status: err.response.status,
            },
          });

    }
}



export const addEdu = (formData, history) => async dispatch => {
    try {
         const config = {
             headers :{
                 'Content-Type': 'application/json'
             }
         }

         const res = await axios.put('/api/profile/education', formData, config);

        dispatch({
             type: UPDATE_PROFILE,
             payload: res.data
         });
        
       toast.success("Education Added");
       dispatch(setAlert('Education Added', "success"));
        history.push('/dashboard');
        

    }catch(err){
           const errors = err.response.data.errors;

           if (errors) {
             errors.forEach((error) => {
               toast.error(error.msg);
               dispatch(setAlert(error.msg, "danger", 5000));
             });
           }
          dispatch({
            type: PROFILE_ERROR,
            payload: {
              msg: err.response.statusText,
              status: err.response.status,
            },
          });

    }
}


export const deleteExp = (id) => async dispatch => {
  
  try{
    const res = await axios.delete(`api/profile/experience/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    toast.success("Experience Removed");
    dispatch(setAlert('Experience Removed', "success"));
  } catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText,
              status: err.response.status
            }
    });
  }
};


  
export const deleteAccount = () => async dispatch => {
  if(window.confirm('ARE YOU SURE ??!')){
  try{
    const res = await axios.delete('/api/profile');
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: DELETE_ACCOUNT });
    toast.success("Account Deleted");
    dispatch(setAlert('Account Deleted', "success"));
  } catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText,
              status: err.response.status
            }
    });
  
  }
}
};


  