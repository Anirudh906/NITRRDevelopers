import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const CommentItem = (props) => {
  return (
    <Fragment>
      <Link to="/posts" className="btno btno-3" style={{ marginTop: "30px" }}>
        Back to Posts
      </Link>
      <div class="posts" style={{ marginTop: "30px" }}>
        <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${props.post.post.user}`}>
              <img class="round-img" src={props.post.post.avatar} alt="user" />
              <h4 style={{ color: "rgb(247, 106, 40)" }}>
                {props.post.post.name}
              </h4>
            </Link>
            <p class="post-date">
              Posted on{" "}
              <Moment format="MMMM Do, YYYY">{props.post.post.date}</Moment>
            </p>
          </div>
          <div>
            <p class="my-1">{props.post.post.text}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CommentItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const map = (state) => ({
  auth: state.auth,
  post: state.post,
});
export default connect(map, {})(CommentItem);
