import React, { Fragment , useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CreateProfile from './components/CreateProfile';
import {Toaster} from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from '../src/actions/authToken';

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
     <Toaster position="top-right"/>
      
       <Switch>
       <Route exact path = "/register" component = {Register} />
       <Route exact path = "/login" component = {Login} />
       <PrivateRoute exact path = '/dashboard' component={Dashboard}/>
       <PrivateRoute exact path = '/create-profile' component = {CreateProfile} />
       </Switch> 
      </section>

    </Fragment>
     </Router>
     </Provider>
  );
}

export default App;
