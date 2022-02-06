import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import cat from "../images/catLogin.jpg";

const Login = (props) => {
  const [formDetails, setformDetails] = useState({
    name: "",
    email: "",
  });

  const { email, password } = formDetails;

  const Change = (e) => {
    setformDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();

    props.login({ email, password });
  };

  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-cat">
        <img src={cat} alt="cat" />
      </div>
      <div className="login-container">
        <h1 className="large text-primary signin">Sign In</h1>
        <p className="lead">Sign in your Account</p>
        <form className="form" onSubmit={Submit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={Change}
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={Change}
              style={{ width: "100%" }}
            />
          </div>

          <input
            type="submit"
            className="btn btn-3 signin-button"
            value="Login"
          />
        </form>
        <p
          style={{ position: "relative", fontSize: "15px", top: "20px" }}
          className="my-1"
        >
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const map = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(map, { login })(Login);
