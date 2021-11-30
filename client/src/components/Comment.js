import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../actions/post';
import auth from '../reducers/auth';



const Comment = props => {
    return (
       <div class="postc bg-white p-1">
          <div>
            <Link to={`/profile/${props.comment.user}`}>
              <img
                class="round-img"
                src={props.comment.avatar}
                alt=""
              />
              <h4 style={{color:'rgb(247, 106, 40)'}}>{props.comment.name}</h4>
            </Link>
             <p class="post-date">
                Posted on <Moment format='MMMM Do, YYYY'>{props.comment.date}</Moment>
            </p>
          </div>
          <div>
            <p class="my-1">
             {props.comment.text}
            </p>
            {!auth.loading && props.comment.user === props.auth.user._id && (
                <button onClick= {e => props.deleteComment(props.postId, props.comment._id)} type='button' className="delete-post-button">
                  <i class="fas fa-trash" style={{margin:'auto'}}></i> 
                </button>
            )}
          </div>
        </div>

    )
}

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

const map = state => ({
  auth: state.auth
});

export default connect(map, { deleteComment })(Comment);
