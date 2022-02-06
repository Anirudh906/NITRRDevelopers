import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/post";
const PostForm = (props) => {
  const [text, setText] = useState("");
  return (
    <div class="post-form">
      <h3 style={{ color: "rgb(247, 80, 45)" }}>Say Something...</h3>

      <form
        class="formPost my-1"
        onSubmit={(e) => {
          e.preventDefault();
          props.addPost({ text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input
          type="submit"
          class="btno btno-3"
          value="Post"
          style={{ marginTop: "30px", marginBottom: "50px", marginLeft: "0" }}
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
