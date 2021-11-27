import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from './Loader';
import { getProfileByID } from '../actions/profile';
import Moment from 'react-moment';
import ProfileGithub from './ProfileGithub.js';


const ProfileDashboard = props => {
    useEffect(() => {
           props.getProfileByID(props.match.params.id);
           
    }, [props.match.params.id, props.getProfileByID]);
    
    return (
        <Fragment>
            { props.profile.profile === null || props.profile.loading ? <Loader /> : <Fragment>
              
               <Link to ='/profiles' className = 'btn btn-3'>Back</Link>
               {props.auth.isAuthenticated && !props.auth.loading && props.auth.user._id === props.profile.profile.user._id && (<Link to = '/edit-profile' className = 'btn btn-3'> Edit Your Profile</Link>)}
            
       <div className="card-containermain">
      <img className ="round" src={props.profile.profile.user.avatar}  alt="user"/>
      <h2>{props.profile.profile.user.name}</h2>
      <h4>{props.profile.profile.branch}</h4>
      <p>{props.profile.profile.status} </p> <p style={{marginBottom:'20px'}}> {props.profile.profile.location}</p>
       <div style={{height:'30px'}}></div>
              </div>
  <div className="about-container">

<div className="social-icons">
   
       {props.profile.profile.social && props.profile.profile.social.instagram && (
              <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={props.profile.profile.social.instagram}
                          className="icon"
                        >
                          <i
                            className="fa fa-instagram"
                            aria-hidden="true"
                          ></i>
                          
                        </a>
       )}

       {props.profile.profile.social && props.profile.profile.social.facebook && (
            <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={props.profile.profile.social.facebook}
                          className="icon"
                        >
                          <i
                            className="fa fa-facebook-square "
                            aria-hidden="true"
                          ></i>
                          
                        </a>
       )}
        {
            props.profile.profile.social && props.profile.profile.social.linkedin && (
            <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={props.profile.profile.social.linkedin}
                          className="icon"
                        >
                          <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                          ></i>
                          
                        </a>)
        }
          {
            props.profile.profile.social && props.profile.profile.social.twitter && (
            <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={props.profile.profile.social.twitter}
                          className="icon"
                        >
                          <i
                            className="fa fa-twitter"
                            aria-hidden="true"
                          ></i>
                          
                        </a>)
        }

         {
            props.profile.profile && props.profile.profile.githubusername && (
            <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={`https://github.com/${props.profile.profile.githubusername}`}
                          className="icon"
                        >
                          <i
                            className="fa fa-github"
                            aria-hidden="true"
                          ></i>
                          
                        </a>)
        }
         {
            props.profile.profile && props.profile.profile.website && (
            <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={props.profile.profile.website}
                          className="icon"
                        >
                          <i
                            className="fas fa-globe"
                            aria-hidden="true"
                          ></i>
                          
                        </a>)
        }         
                      
                         
                         
                      </div>

                      <h2 className = 'text-primary Acenter' > {props.profile.profile.user.name}'s Bio</h2> 
                      <p className="Acenter redColor" style={{marginBottom:'50px'}}>{props.profile.profile.bio} </p>
                    

    <h2 className = 'text-primary Acenter' > {props.profile.profile.user.name}'s Skills</h2> 
    <div className="skillsList">

    <ul class="check-list" style={{marginBottom:'50px'}}>
      {props.profile.profile.skills.map((skill, index) => {
            return <li key={index}>{skill}</li> 
      })}
    </ul>
     
    </div>
  </div>     
     <div className = "exp-container" style={{margin: '20px auto', lineHeight:'35px'}}>
      <h2 className = 'redColor' style={{marginBottom: '20px'}}>Experience</h2> 
      
      {props.profile.profile.experience.length > 0 ? ( 
        props.profile.profile.experience.map( exp => { 
         return <div className = 'redColor'>
         <h3>{exp.company}</h3>
         <p>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {!exp.to ? 'Now': <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}

         </p>
         <p> <strong>Position: &nbsp;</strong> {exp.title}</p>
         <p><strong>Description: &nbsp;</strong> {exp.description}</p>
         </div>
        }
       )) : (<h4 className="redColor">No experience added</h4>)} 
     </div>
      {props.profile.profile.githubusername && (
        <ProfileGithub username = {props.profile.profile.githubusername}/>
      )}
    
            </Fragment>}
        </Fragment>
    )
}

ProfileDashboard.propTypes = {
  getprofileByID : PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired
}

const map = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(map, { getProfileByID })(ProfileDashboard);
