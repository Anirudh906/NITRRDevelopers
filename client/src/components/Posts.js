import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "./Loader";
import PostItem from "./PostItem.js";
import { getPosts } from "../actions/post";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";
const Posts = (props) => {
  useEffect(() => {
    props.getPosts();
  }, [props.getPosts]);
  return props.post.loading ? (
    <Loader />
  ) : (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "30px" }}>📬</span>
        <h1
          className="large text-primary"
          style={{
            padding: "auto",
            textAlign: "center",
            display: "inline-block",
            margin: "20px auto",
          }}
        >
          Posts
        </h1>
      </div>

      <p className="lead text-center">Welcome to the community</p>
      <div style={{marginBottom: '50px', textAlign: 'center'}}>
      <Link
        to="/create-post"
        className="btno btno-3"
      >
        Create Post
      </Link></div>
      <div>
        {props.post.posts.map((post) => {
          return <PostItem key={props.post._id} post={post} />;
        })}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const map = (state) => ({
  post: state.post,
});

export default connect(map, { getPosts })(Posts);
