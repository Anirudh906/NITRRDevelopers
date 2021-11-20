import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { currentProfile } from '../actions/profile';
import Loader from './Loader';
const Dashboard = props => {
   
   useEffect(() => {
       props.currentProfile();
   }, []);
   // return props.profile.profile === null && props.profile.loading ? <Loader /> : <Fragment>test</Fragment>;
    return props.profile.loading && props.profile.profile === null ? (
      <Loader />
    ) : (
      <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          Welcome{" "}
          {props.profile.profile && props.profile.profile.user.name}
        </p>
        {props.profile.profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
            <p>You don't have a profile.</p>
            <Link to="/create-profile" className="btn btn-3" style= {{marginTop: '50px', height: '50px', width:'auto', padding: ' auto'}}>
              Create one
            </Link>
          </Fragment>
        )}
      </Fragment>
    );
};

Dashboard.propTypes = {
   currentProfile: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   profile: PropTypes.object.isRequired
};

const mapState = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapState, { currentProfile })(Dashboard);
