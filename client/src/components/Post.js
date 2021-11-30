import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Loader from './Loader';
import { getPost } from '../actions/post';
import Comment from './Comment';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';




const Post = props => {
   useEffect(() => {
       props.getPost(props.match.params.id);
   }, [props.getPost]);
   
    return props.post.loading || props.post.post === null ? <Loader/> : <Fragment>
        <CommentItem/>
        <CommentForm postId = {props.post.post._id} />
        <div className = "comments" style={{marginBottom: '40px'}}>
            {props.post.post.comments.map(comment => {
               return <Comment key = { comment._id } comment = {comment} postId = {props.post.post._id} />
            })}
        </div>
    </Fragment>
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}
const map = state => ({
  post: state.post
});

export default connect(map, { getPost })(Post);
