import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getGithubRepos } from '../actions/profile';
import Loader from './Loader';


const ProfileGithub = props => {
    
    useEffect(() => {
      props.getGithubRepos(props.username);
    }, [getGithubRepos])
    return (
        <div className="githubTab">
            <h2 style={{marginBottom:'20px'}}>Github Repos</h2>
    {props.repos.length === 0 ? (<p>No repos found</p>) : (
         props.repos.map(repo => (
             <div className = "gitRepo">
                 <div>
                     <h4>
                         <a href = {repo.html_url} target = '_blank' rel = 'noopener noreferrer'>
                             {repo.name}
                         </a>
                     </h4>
                     <p>{ repo.description }</p>

                 </div>
                 <div>
                     <ul>
                        
                         <div class="double-val-label">
                          <span class="success">Stars</span>
                          <span>{ repo.stargazers_count }</span>
                         </div>
                         <div class="double-val-label">
                         <span class="primary">Forks</span>
                         <span>{ repo.forks_count }
                         </span>
                         </div>
                     </ul>
                 </div>
             </div>
         ))
       )}

        </div>
    )
}

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}
const map = state => ({
    repos: state.profile.repos
})
export default connect(map, { getGithubRepos })(ProfileGithub);
