import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
import Register from './auth/SignUp';
import Login from './auth/Login';
// import Alert from './components/Alert';
import Dashboard from './Dashboard';
import Profiles from './Profiles';
import ProfileDashboard from './ProfileDashboard';
import PrivateRoute from './PrivateRoute';
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';
import AddExperience from './AddExperience';
import {Toaster} from 'react-hot-toast';

import Posts from './Posts';
import Post from './Post';
import NotFound from './NotFound';


const Routes = props => {
    return (
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
          <Route component = {NotFound} />
       </Switch> 
      </section>
 
    )
}

Routes.propTypes = {

}

export default Routes
