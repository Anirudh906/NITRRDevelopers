import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = props => {
    return (
      <div className="card-container">
      <img className ="round image" src={props.profile.user.avatar}  alt="user"/>
      <h2>{props.profile.user.name}</h2>
      <h4>{props.profile.branch}</h4>
      <p>{props.profile.status} </p> <p style={{marginBottom:'20px'}}> {props.profile.location}</p>
      <Link to = {`/profile/${props.profile.user._id}`} className='btn btn-3'>View Profile</Link>
      <div style={{height:'30px'}}></div>
      <div className ="skills">
      <h3 style={{marginBottom: '10px'}}>Skills</h3>
      <ul>
      {props.profile.skills.map((skill, index) => (
       
        <li key = {index}>{skill}</li>
      ))}
      </ul>
      </div>
      </div>
    );
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
