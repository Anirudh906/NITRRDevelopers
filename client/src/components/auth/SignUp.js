import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import toast from 'react-hot-toast';
import cat from '../images/catSignup.png';
const SignUp = (props) => {

    const [ formDetails, setformDetails ] = useState({
        name: '',
        email: '',
        password:'',
        password2: ''
    });

    const { name, email, password, password2 } = formDetails;

    const Change = e => {
        setformDetails({...formDetails, [e.target.name]: e.target.value})
    }
    const Submit = e => {
        e.preventDefault();
        
        if(password !== password2){
           props.setAlert('Passwords dont match', 'danger', 5000);
           toast.error('Passwords dont match!');
        }
         else {
          props.register({ name, email, password }); 
        }
    }

     if (props.isAuthenticated) {
       return <Redirect to="/dashboard" />;
     }


    return (
      <Fragment>
        <div style={{ display: "inline-block", marginLeft: "80px" }}>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">Create Your Account</p>
          <form className="form" onSubmit={Submit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={Change}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={Change}
              />
              {/* <small className="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small> */}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={Change}
                //minLength="6"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={Change}
                // minLength="6"
              />
            </div>
            <input
              type="submit"
              style={{ position: "relative", right: "20px", top: "20px" }}
              className="btn btn-3"
              value="Register"
            />
          </form>
          <p
            style={{ position: "relative", top: "20px", fontSize:"15px" }}
            className="my-1"
          >
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
        <div
          style={{
            display: "inline-block",
            opacity: "0.7",
            position: "relative",
            left: "150px",
            bottom: "80px",
            width: "375px",
            height: "375px",
          }}
        >
          <img src={cat} />
        </div>
      </Fragment>
    );
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const map = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(map, { setAlert, register })(SignUp);