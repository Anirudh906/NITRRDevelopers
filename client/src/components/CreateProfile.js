import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "../actions/profile";

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    branch: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    CodeforcesHandle: "",
    CodechefHandle: "",
    LeetcodeHandle: "",
    bio: "",
    githubusername: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
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
    instagram,
  } = formData;
  const Change = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.createProfile(formData, props.history);
  };
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
      <small style={{ position: "relative", left: "30%" }}>
        * = required field
      </small>
      <form
        style={{ marginBottom: "50px", textAlign: "center" }}
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="input-group input-group-icon">
          <input type="text" placeholder="Full Name" />
          <div className="input-icon">🧑🏼‍💻</div>
        </div>

        <div className="input-group input-group-icon">
          <div>
            <select name="status" value={status} onChange={(e) => Change(e)}>
              <option value="0"> * Select Professional Status</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Instructor or Teacher">
                Instructor or Teacher
              </option>
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
          <input
            type="text"
            placeholder="Branch"
            name="branch"
            value={branch}
            onChange={(e) => Change(e)}
          />
          <div class="input-icon">🎓</div>
          <small className="form-text">
            Branch you are currently studying in
          </small>
        </div>
        <div className="input-group input-group-icon">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => Change(e)}
          />
          <div class="input-icon">🌐</div>
          <small className="form-text">Could be your own website</small>
        </div>

        <div className="input-group input-group-icon">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => Change(e)}
          />
          <div class="input-icon">🗺️</div>
          <small className="form-text">
            City & state preferred (eg. Raipur, CG)
          </small>
        </div>
        <div className="input-group input-group-icon">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => Change(e)}
          />
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
            value={githubusername}
            onChange={(e) => Change(e)}
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
          <textarea
            style={{ margin: "0 auto" }}
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => Change(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocial(!displaySocial)}
            type="button"
            className="btno btno-3"
            style={{
              width: "150px",
              fontSize: "12px",
              height: "50px",
              padding: "5px 10px",
            }}
          >
            {displaySocial ? "Remove" : "Add"} Social Network Links
          </button>
        </div>
        {displaySocial && (
          <Fragment>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Codeforces Handle"
                name="CodeforcesHandle"
                value={CodeforcesHandle}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <svg
                  role="img"
                  style={{
                    position: "relative",
                    top: "15px",
                    left: "15px",
                    fontSize: "1px",
                  }}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Codeforces</title>
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                </svg>
              </div>
            </div>

            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Leetcode Handle"
                name="LeetcodeHandle"
                value={LeetcodeHandle}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <svg
                  role="img"
                  style={{
                    position: "relative",
                    top: "15px",
                    left: "15px",
                    fontSize: "1px",
                  }}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LeetCode</title>
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Codechef Handle"
                name="CodechefHandle"
                value={CodechefHandle}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <svg
                  role="img"
                  style={{
                    position: "relative",
                    top: "15px",
                    left: "15px",
                    fontSize: "1px",
                  }}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CodeChef</title>
                  <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 10.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.1622 0 .3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.174 1.174 0 0 1 .3166.0681c.5796 1.0012-.4264 5.2791-.6786 8.1492.1559 1.0276.3138 1.9963.4628 2.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.8557 9.7244.4228 10.2111.3687zm3.1361.271c-.811 2.1088-.9184 6.1092-.9725 7.3528-.054.5407-.0001 1.73.054 2.5952 0 .2163.054.4325.054.6488 0-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.2704 2.1628-1.4047 3.191-1.7832 5.2998-.1081 1.6762-.325 3.6222-.379 5.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.6776 1.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.2553 3.0317.0398 4.6694.0763 1.5485.0717 3.1804.849 4.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.3777 0-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.013 1.013 0 0 1 .2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.034.3617.0339.5196.318-.1877.8916.4364 3.3685.4288 5.104.3124 1.8478.5496 3.8498 1.5716 5.1152C6.3723 11.5076 5.886 9.1286 5.5076 7.128 5.183 5.56 4.9125 4.2086 4.3718 3.776c-.054-.1081-.1079-.163-.1079-.2711 0-.1622-.0002-.3786.1079-.5949-.2772.6337-.4047 1.2673-.3706 1.901-.0445-.6487.0857-1.2905.3706-1.901 0-.054.054-.0538.054-.1079.012-.016.0314-.0349.044-.0511.0618-.0983.1308-.189.2257-.257.0557-.0615.0965-.1191.159-.1817-.0526.0555-.0872.1092-.1335.1647.0273-.018.0523-.0368.0838-.0525.1081-.1082.2154-.1633.3776-.1633zm-.3776.1633c-.0038.0075-.0076.0111-.0114.0184.0125-.0099.0242-.0208.037-.0298-.0074.0037-.0182.0077-.0256.0114zm14.7608 1.1343c-.0017.0052-.004.0104-.0057.0156.0378-.005.0751-.0173.1135-.0156-.0378-.0022-.0763.0103-.115.0199-.8634 2.6418-1.8874 5.2844-2.9118 7.9262a.0184.0184 0 0 1-.0015.0028c-.0874.4652-.234.8842-.5395 1.1898.4326-.4867.4854-1.1907.5395-2.0558.054-.811.0544-1.6761.487-2.5413 0-.0531.0012-.1058.0525-.159.0003-.0009.0012-.0019.0015-.0028.0973-.3524.202-.6885.3166-1.018.4183-1.2896 1.1396-3.1653 2.0131-3.3405.0163-.0052.034-.018.0497-.0213zM8.3726 16.2113l-.3238.1079c.1623.2163.2696.379.3777.433.1081.054.2168.108.379.108.0541 0 .1618 0 .2159-.054l.812-.2698c.0541 0 .1078-.054.1619-.054.1081 0 .1616 0 .2697.054l.2712.2698.2697-.054c-.1081-.1622-.2695-.3236-.3776-.3776-.1082-.0541-.2169-.1094-.379-.1094h-.108l-.866.3252h-.1618c-.1082 0-.2157 0-.2698-.054-.054-.054-.163-.1629-.2712-.3251zm-2.5953.541c-.2703.1621-.649.4324-1.1897.6487-.5407.2163-.9734.4325-1.1897.6488-.2163.2163-.3237.4326-.3237.6488 0 .1082.0537.1632.1618.2172.054.0541.1632.0539.2172.108.757.3244 1.5133.7019 2.2162 1.0803.1082.0541.2171.1632.2712.2173.054.054.1078.054.1618.054.1082 0 .2695-.0538.3777-.162.1081-.108.1632-.217.1632-.325 0-.1082-.055-.1618-.1632-.2158 0 0-.4328-.2165-1.1898-.541-.4866-.2162-.9179-.4326-1.1883-.5948.1623-.2704.486-.4865.9726-.7028.5407-.2163.9196-.4326 1.0818-.5948.054-.0541.054-.1078.054-.1619 0-.054-.0539-.1631-.108-.2172-.054-.054-.163-.1079-.2711-.1079zm11.247 0c-.054 0-.1618.0537-.2158.1078-.0541.1081-.1093.1632-.1093.2172v.054c.1622.1622.3797.2695.7041.3776.2704.054.5403.1632.8107.2172.3244.1082.5407.2693.6488.4856v.0553c0 .0541-.1088.1616-.3251.2698-.1082.054-.3245.2167-.5949.433-.2703.1622-.4326.3236-.5948.3776-.2163.1082-.3776.217-.4316.3252-.0541.054-.054.1077-.054.1618 0 .1081.0539.1077.108.2158.054.1081.1616.1093.2157.1093.054 0 .1078-.0554.1619-.0554.2703-.1622.6492-.3782 1.0818-.7567.4866-.3784.8655-.6484 1.0818-.8106.2163-.1082.3237-.2169.3237-.379 0-.0541.0002-.1618-.1079-.2159-.3785-.4325-.9185-.7022-1.5674-.9185-.1081-.0541-.2704-.1092-.5948-.1633-.1622-.054-.3249-.1079-.433-.1079zm-2.9743.8106c-.2704 0-.4866.055-.6488.2172-.2163.1622-.2699.4323-.2158.7567 0 .2703.1075.4865.2697.7027.1622.2163.3786.3252.5949.3252.1622 0 .2708-.0553.433-.1094.2703-.1622.379-.4319.379-.9185 0-.3785-.109-.6485-.2711-.8107-.1622-.1081-.3246-.1632-.541-.1632zm-4.4877.054c-.2704 0-.4866.055-.6488.2171-.2163.1622-.27.4323-.2158.7567 0 .2704.1075.4865.2697.7028s.3786.3251.5949.3251c.1622 0 .2708-.0552.433-.1093.2703-.1622.3776-.432.3776-.9186 0-.4325-.1075-.7025-.2697-.8106-.1622-.1082-.3247-.1633-.541-.1633zm0 .6501c.1622 0 .2711.1076.2711.2698 0 .1622-.163.2697-.2711.2697-.1622 0-.2698-.1075-.2698-.2697s.1076-.2698.2698-.2698zm4.3798.054c.1622 0 .2711.1075.2711.2697 0 .1082-.109.2698-.2711.2698-.1622 0-.2698-.1076-.2698-.2698 0-.1622.1076-.2697.2698-.2697zm-2.7032 2.1083l.1619.3237c.054.1081.1076.163.2158.2711.054.054.163.1619.2712.1619h.1078c.1082 0 .1618 0 .2158-.054.0541-.054.1632-.0538.2173-.1079l.1618-.1618c.054-.054.108-.1092.108-.1633.054-.054.0537-.1078.1078-.1618 0-.0541.054-.108.054-.108-.0541.1082-.1618.2156-.2158.3238-.1082.054-.1616.1632-.2698.1632-.1081.0541-.217.054-.3251.054s-.2157.0001-.2697-.054c-.1082 0-.1632-.0538-.2173-.1079l-.1618-.1632c-.054-.0541-.1078-.1618-.1619-.2158zm-.866 1.0278c-1.1355 0-1.8377 1.5136-3.4598.1619-.4326 2.6494 2.7583 2.866 4.11 1.7306.9192-.811.6475-1.9465-.6502-1.8925zm2.8664 0c-1.2977-.054-1.568 1.0815-.6488 1.8925 1.3518 1.1355 4.5412.9188 4.1087-1.7306-1.6221 1.3517-2.2703-.1619-3.4599-.1619z" />
                </svg>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <i className="fab fa-facebook"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => Change(e)}
              />
              <div class="input-icon">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </Fragment>
        )}
        <input type="submit" className="btno btno-3 my-1" />
        <Link className="btno btno-3 my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};
export default connect(null, { createProfile })(withRouter(CreateProfile));
