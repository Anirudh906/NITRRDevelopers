import React, { Fragment , useState } from 'react'
import { Link } from 'react-router-dom';
 const Login = () => {
    const [formDetails, setformDetails] = useState({
      name: "",
      email: ""
      });

    const { email, password } = formDetails;

    const Change = (e) => {
      setformDetails({ ...formDetails, [e.target.name]: e.target.value });
    };
    const Submit = (e) => {
      e.preventDefault();
     
        console.log("Done");
      
    };
    return (
      <Fragment>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> SIgn into Your Account
        </p>
        <form className="form" onSubmit={Submit}>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={Change}
              required
            />
           
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={Change}
              minLength="6"
            />
          </div>
         
          <input type="submit" className="btn btn-3" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Fragment>
    );
}
export default Login;