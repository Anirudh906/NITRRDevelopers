import React from "react";
import { Link, Redirect } from "react-router-dom";
import walkingCode from "./images/bongo-cat-code-removebg-preview.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MainPage = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div>
        <div className="landing-inner">
          <div className="glassEffect">
            <img
              alt="main"
              src={walkingCode}
              style={{
                height: "175px",
                width: "275px",
                marginBottom: "10px",
                color: "rgba(240, 240, 240, 0.7)",
              }}
            />
            <h1 className="x-large">&#60; NITRR Developers &#47; &#62;</h1>
            <p className="lead">Connect with developers of NITRR.</p>
            <div className="buttons">
              <Link to="/register" className="btn btn-3">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-3">
                Login
              </Link>
              {/* <div className="circle1"></div>
            <div className="circle2"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
MainPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const map = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(map)(MainPage);
