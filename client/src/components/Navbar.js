import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../actions/auth';
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
// import Avatar2 from 'react-avatar'; 
// var md5 = require('md5');
// const hash = "";
const Navbar = (props) => {
    const authLinks = (
      <ul>
      <li>
        <Link style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }} to = "/profiles">Developers</Link>
       </li>
       <li>
        <Link style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }} to = "/posts">Posts</Link>
       </li>
        <li>
          <Avatar
            src={
              props.auth.isAuthenticated &&
              !props.auth.loading &&
              props.auth.user &&
              props.auth.user.avatar
            }
          />
        </li>
        <li>
          <Link
            to="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* <AccountCircleIcon style={{ marginRight: ".2rem" }} /> */}
            {props.auth.isAuthenticated &&
              !props.auth.loading &&
              props.auth.user &&
              props.auth.user.name}
          </Link>
        </li>
        <li>
          <a
            onClick={props.logout}
            href=""
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {" "}
            <LogoutTwoToneIcon style={{ marginRight: ".2rem" }} />
            Logout{" "}
          </a>
        </li>

        {/* <li>
          <Avatar
            src={
              props.auth.isAuthenticated &&
              !props.auth.loading &&
              props.auth.user &&
              props.auth.user.avatar
            }
          />
        </li> */}
      </ul>
    );
  
  const guestLinks = (
         <ul>
            <li>
              <Link to = "/profiles">Developers</Link>
            </li>
            <li>
              <Link to = "/register">Register</Link>
            </li>
            <li>
              <Link to = "/login">Login</Link>
            </li>
          </ul>
  );
  
  
  
  return (
   
        <nav className ="navbar bg-gray">
          <h1>
            <Link to = "/">
              <i className="fas fa-code"></i> NITRRDevelopers
            </Link>
          </h1>
          { !props.auth.loading && (<Fragment>{ props.auth.isAuthenticated ? authLinks: guestLinks } </Fragment>)}
        </nav>
      
    );
}

Navbar.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
}

const map = state => ({
  auth: state.auth, 
  profile: state.profile
});
export default connect(map, { logout })(Navbar);