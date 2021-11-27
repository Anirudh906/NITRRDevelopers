import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Loader from './Loader';
import ProfileItem from './ProfileItem.js';
import { getProfiles } from '../actions/profile';


const Profiles = props => {
   useEffect(() => {
          props.getProfiles()
   }, []);
    return (
        <Fragment>
            { props.profile.loading ? <Loader/> : <Fragment>
         <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>🐱‍💻 </span>
          <h1
            className="large text-primary"
            style={{
              padding: "auto",
              textAlign: "center",
              display: "inline-block",
              margin: "20px auto",
            }}
          >
            Developers
          </h1>
        </div>
    <div>
        {props.profile.profiles.length > 0 ? (
            props.profile.profiles.map(profile => (
                <ProfileItem key = {profile._id} profile = {profile}/>
            )
        )) : <h4>No profiles found...</h4>}
    </div>

            </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const map = state => ({
   profile: state.profile
});

export default connect(map, { getProfiles })(Profiles);
