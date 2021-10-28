import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import {Toaster} from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store';

const App = () =>  {
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
       </Switch> 
      </section>

    </Fragment>
     </Router>
     </Provider>
  );
}

export default App;
