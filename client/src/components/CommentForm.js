import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../actions/post";

const CommentForm = (props) => {
  const [text, setText] = useState("");

  return (
    <div class="post-form">
      <h3 style={{ color: "rgb(247, 80, 45)", marginTop: "30px" }}>
        Leave a comment
      </h3>

      <form
        class="formPost my-1"
        onSubmit={(e) => {
          e.preventDefault();
          props.addComment(props.postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="3"
          placeholder="Comment here.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input
          type="submit"
          class="btnc btnc-3"
          value="Post"
          style={{ marginBottom: "50px", marginLeft: "0" }}
        />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
