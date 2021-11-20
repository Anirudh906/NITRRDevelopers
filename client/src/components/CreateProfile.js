import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        branch:'',
        website:'',
        location:'',
        status:'',
        skills:'',
        CodeforcesHandle:'',
        CodechefHandle:'',
        LeetcodeHandle:'',
        bio:'',
        githubusername:'',
        linkedin:'',
        twitter:'',
        facebook:'',
        instagram:''


    });
      const [displaySocial, toggleSocial] = useState(false);
    const {
        branch,
        website,
        location,
        status,
        skills,
        CodeforcesHandle,
        CodechefHandle,
        LeetcodeHandle,
        bio,
        githubusername,
        linkedin,
        twitter,
        facebook,
        instagram
    } = formData;

   
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>🪄 </span>
          <h1
            className="large text-primary"
            style={{
              padding: "auto",
              textAlign: "center",
              display: "inline-block",
              margin: "20px auto",
            }}
          >
            Create Your Profile
          </h1>
        </div>
        <p className="lead" style={{ textAlign: "center" }}>
          Fill in information to make your profile.
        </p>
        <small style= {{position :'relative', left:"30%" }}>* = required field</small>
        <form style= {{ marginBottom: '50px', textAlign:'center'}}>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Full Name" />
            <div className="input-icon" >🧑🏼‍💻</div>
          </div>

          <div className="input-group input-group-icon">
            <div>
              <select name="status">
                <option value="0"> * Select Professional Status</option>
                <option value="Student">Student or Learning</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
              <small className="form-text">
                Give us an idea of where you are at in your career
              </small>
            </div>
          </div>
          {/* <div class="input-group input-group-icon">
            <input type="text" placeholder="Full Name" />
            <div class="input-icon">🧑🏼‍💻</div>
          </div> */}

          <div className="input-group input-group-icon">
            <input type="text" placeholder="Branch" name="branch" />
            <div class="input-icon">🎓</div>
            <small className="form-text">
              Branch you are currently studying in
            </small>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Website" name="website" />
            <div class="input-icon">🌐</div>
            <small className="form-text">Could be your own website</small>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Location" name="location" />
            <div class="input-icon">🗺️</div>
            <small className="form-text">
              City & state preferred (eg. Raipur, CG)
            </small>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="* Skills" name="skills" />
            <div class="input-icon">⚡</div>
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,React)
            </small>
          </div>
          <div className="input-group input-group-icon">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
            />
            <div class="input-icon">
              <i class="fab fa-github"></i>
            </div>
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea style = {{ margin:'0 auto'}}
              placeholder="A short bio of yourself"
              name="bio"
            ></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <button
              onClick= {() => toggleSocial(!displaySocial)}
              type="button"
              className="btno btno-3"
              style={{
                width: "150px",
                fontSize: "12px",
                height: "50px",
                padding: "5px 10px",
              }}
            >
              {displaySocial ? "Remove": "Add"} Social Network Links
            </button>
           
          </div>
           {displaySocial && <Fragment>

          <div className="input-group input-group-icon">
            <input type="text" placeholder="Twitter URL" name="twitter" />
            <div class="input-icon">
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input type="text" placeholder="Facebook URL" name="facebook" />
            <div class="input-icon">
              <i className="fab fa-facebook"></i>
            </div>
          </div>

          <div className="input-group input-group-icon">
            <input type="text" placeholder="Linkedin URL" name="linkedin" />
            <div class="input-icon"><i className="fab fa-linkedin"></i></div>
          </div>

          <div className="input-group input-group-icon">
            <input type="text" placeholder="Instagram URL" name="instagram" />
            <div class="input-icon"><i className="fab fa-instagram"></i></div>
          </div>
          </Fragment>}
          <input type="submit" className="btno btno-3 my-1" />
          <a className="btno btno-3 my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </Fragment>
    );
}

CreateProfile.propTypes = {

}

export default CreateProfile
