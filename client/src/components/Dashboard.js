import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { currentProfile, deleteAccount } from '../actions/profile';
import DashControls from './DashControls';
import Experience from './Experience';
import Loader from './Loader';
const Dashboard = props => {
   
   useEffect(() => {
       props.currentProfile();
   }, [props.currentProfile]);
   // return props.profile.profile === null && props.profile.loading ? <Loader /> : <Fragment>test</Fragment>;
    return props.profile.loading && props.profile.profile === null ? (
      <Loader />
    ) : (
      <Fragment>
        
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>🔮 </span>
          <h1
            className="large text-primary"
            style={{
              padding: "auto",
              textAlign: "center",
              display: "inline-block",
              margin: "20px auto",
            }}
          >
            Dashboard
          </h1>
           <span style={{ fontSize: "30px" }}> 🔮</span>
        </div>
        <p className="lead" style={{ textAlign: "center" }}>
          Welcome 🐱‍💻 {props.auth.user && props.auth.user.name}
        </p>
        {props.profile.profile !== null ? (
          <Fragment>
            <DashControls />
            <Experience experience = {props.profile.profile.experience}/>

            <div style={{ textAlign: "center" , margin:'50px 0'}}>
              <button className= 'btndelacc btndelacc-3' onClick={() => props.deleteAccount()}>Delete Account</button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p style={{ textAlign: "center" }}>You don't have a profile.</p>
            <div style={{ textAlign: "center" }}>
              <Link
                to="/create-profile"
                className="btn btn-3"
                style={{
                  marginTop: "50px",
                  height: "50px",
                  width: "auto",
                  padding: " auto",
                }}
              >
                Create one
              </Link>
            </div>
            
            <div style={{ textAlign: "center" , margin:'50px 0'}}>
              <button className= 'btndelacc btndelacc-3' onClick={() => props.deleteAccount()}>Delete Account</button>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
};

Dashboard.propTypes = {
   currentProfile: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   profile: PropTypes.object.isRequired,
   deleteAccount: PropTypes.func.isRequired
};

const mapState = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapState, { currentProfile, deleteAccount })(Dashboard);
