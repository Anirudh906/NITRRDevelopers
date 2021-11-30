import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../actions/post';

const PostItem = props => {
 
  
  return (
        
     <Fragment>
     <div class="posts">
        <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${props.post.user}`}>
              <img
                class="round-img"
                src={props.post.avatar}
                alt="user"
              />
              <h4 style={{color:'rgb(247, 106, 40)'}}>{props.post.name}</h4>
            </Link>
             <p class="post-date">
                Posted on <Moment format='MMMM Do, YYYY'>{props.post.date}</Moment>
            </p>
          </div>
          <div>
            <p class="my-1">
              {props.post.text}
            </p>

           <span style={{marginRight:'20px'}}>
           <button onClick={e => props.addLike(props.post._id)} className="post-button-like">
              <i class="fas fa-thumbs-up"></i>
           </button> 
              
              <span>{props.post.likes.length}</span>
            </span>
            <span style={{marginRight:'20px'}}>
              <button onClick={e => props.removeLike(props.post._id)} className="post-button-unlike"> 

              <i class="fas fa-thumbs-down"></i>
              </button> 
            </span>
            <Link to={`/post/${props.post._id}`} style={{marginRight:'20px'}}>
              
              <i class="far fa-comments"></i>
              <span> &nbsp;{props.post.comments.length}</span>
            </Link>

            {!props.auth.loading && props.post.user === props.auth.user._id && (

            <span 
          >
           <button onClick={e => props.deletePost(props.post._id)} className="delete-post-button">
             <i class="fas fa-trash"></i>
           </button>
          </span>
            )}
          </div>
        </div>
       </div>
     </Fragment>
        
    )
}

PostItem.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired,
   addLike: PropTypes.func.isRequired,
   removeLike: PropTypes.func.isRequired,
   deletePost: PropTypes.func.isRequired
}
const map = state => ({
 auth: state.auth
});

export default connect(map, { addLike, removeLike, deletePost })(PostItem);
