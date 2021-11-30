import React, { Fragment , useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
// import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import Profiles from './components/Profiles';
import ProfileDashboard from './components/ProfileDashboard';
import PrivateRoute from './components/PrivateRoute';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import AddExperience from './components/AddExperience';
import {Toaster} from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from '../src/actions/authToken';
import Posts from './components/Posts';
import Post from './components/Post';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}  



const App = () =>  {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store = {store}>
    <Router>
    <Fragment>
    <Navbar/>
    <Route exact path = '/' component = {MainPage} />
     <section className = "container">
     <Toaster position="top-center"/>
      
       <Switch>
       <Route exact path = "/register" component = {Register} />
       <Route exact path = "/login" component = {Login} />
       <Route exact path = "/profiles" component = {Profiles} />
         <Route exact path = "/profile/:id" component = {ProfileDashboard} />
       <PrivateRoute exact path = '/dashboard' component={Dashboard}/>
       <PrivateRoute exact path = '/create-profile' component = {CreateProfile} />
       <PrivateRoute exact path = '/edit-profile' component = {EditProfile} />
        <PrivateRoute exact path = '/add-experience' component = {AddExperience} />
        <PrivateRoute exact path = '/posts' component = {Posts} />
         <PrivateRoute exact path = '/post/:id' component = {Post} />
        
       </Switch> 
      </section>
 
    </Fragment>
     </Router>
     </Provider>
  );
}

export default App;
