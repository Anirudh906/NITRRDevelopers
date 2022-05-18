import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/post";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {DropzoneArea} from 'material-ui-dropzone'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import toast from "react-hot-toast";

const theme = createTheme({
  overrides: {
    MuiDropzoneArea: {
      text: {
        fontSize: "1rem",
        color: "rgb(247, 80, 45)"
      }
    }
  }
});

const PostForm = (props) => {
  const [text, setText] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [visible, setVisible] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [preview, setPreview] = useState()
  const hiddenFileInput = React.useRef(null);
  useEffect(() => {
    if (!imageData) {
        setPreview(undefined)
        return
    } 
    const objectUrl = URL.createObjectURL(imageData)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [imageData])


  if (redirect) {
    return <Redirect to="/posts" />;
  }


  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  
  const handleChange = e => {
    setImageData(e.target.files[0]);
    setVisible(true);
    toast.success("Image uploaded")
  };
  return (
    <div class="post-form" style={{ textAlign: "center" }}>
      <h3 style={{ color: "rgb(247, 80, 45)" }}>Say Something...</h3>

      <form
        class="formPost my-1"
        onSubmit={(e) => {
          e.preventDefault();
          let formData = new FormData();
            formData.append("text", text);
            formData.append("image", imageData);
            props.addPost(formData);
            setText("");
            setRedirect(true);

        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Create a post"
          value={text}
          style={{marginLeft: "20%"}}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
       
       <button
          type="button"
          class="btno btno-3"
          style={{ marginTop: "30px", marginBottom: "50px" }}
          onClick={e => handleClick(e)}
          ><AddPhotoAlternateOutlinedIcon/></button>
          
         {/* {visible && 
        (<div style={{width: "50%", margin: "auto"}}>
        <ThemeProvider theme={theme}>
        <DropzoneArea dropzoneText={"Drag and drop an image here or click"}
         onChange={(file) => setImageData(file)}  
         filesLimit={1}
         acceptedFiles={['image/*']}
         dropzoneClass="drop"
         showPreviewsInDropzone={true}
         />
        </ThemeProvider>
         </div>)} */}
        <input type="file" name="image" accept="image/*" style={{display:'none'}} 
        onChange={e => handleChange(e)}
        ref={hiddenFileInput}/>
    
        <button
          type="submit"
          class="btno btno-3"
          value="Post"
          // onClick={e => {

          //   let formData = new FormData();
          //   formData.append("text", text);
          //   if (imageData !== null) {
          //   formData.append("image", imageData);
          //   }
          // console.log(formData);
         
          //   props.addPost(text);
          //   setText("");
          //   setRedirect(true);
          // }}
          style={{ marginTop: "30px", marginBottom: "50px" }}
        >Post</button><br/>
        {imageData && 
        ( <div>
          <p>Preview:</p>
          <img src={preview} style={{marginTop:"10px", width:"200px", height:"100px"}}/>
          </div> )}
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
