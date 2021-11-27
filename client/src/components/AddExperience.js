import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { addExp } from '../actions/profile';
const AddExperience = props => {
   const [formData, setFormData] = useState({
       company: '',
       title: '',
       location: '',
       from: '',
       to: '',
       current: false,
       description: ''
   })
   const [toDate, toggleToDate] = useState(false);

   const { company, title, location, from, to, current, description } = formData;

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <Fragment>
          
       <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>⌨️ </span>
          <h1
            className="large text-primary"
            style={{
              padding: "auto",
              textAlign: "center",
              display: "inline-block",
              margin: "20px auto",
            }}
          >
            Add Experience
          </h1>
        </div>
      <p className="lead" style={{ textAlign: "center" }}>
        Add any programming
        experience that you had
      </p>
      <small style={{ position: "relative", left: "30%" }}>* = required field</small>
      <form  style={{ marginBottom: "50px", textAlign: "center" }} onSubmit = {e => {
          e.preventDefault();
          props.addExp(formData, props.history);
      }}> 
        <div className="input-group">
          <input type="text" placeholder="* Job Title" name="title" value = {title} onChange = {e => onChange(e)} required />
        </div>
        <div className="input-group ">
          <input type="text" placeholder="* Company" name="company" value = {company} onChange = {e => onChange(e)} required />
        </div>
        <div className="input-group ">
          <input type="text" placeholder="Location" name="location" value = {location} onChange = {e => onChange(e)} />
        </div>
        <div className="input-group ">
          <h4>From Date</h4>
          <input type="date" name="from" value = {from} onChange = {e => onChange(e)} />
        </div>
         <div className="input-groupEx">
          <p><input type="checkbox" name="current" style = {{width: '1%'}} value={current} checked= {current} onChange = {
           e => {
               setFormData({...formData, current: !current});
               toggleToDate(!toDate);

           }
          }/>{' '}Current Job</p>
        </div>
        <div className="input-group">
          <h4>To Date</h4>
          <input type="date" name="to" value = {to} onChange = {e => onChange(e)} disabled = { toDate ? 'disabled' : ''} />
        </div>
        <div className="input-group input-group-icon">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            style={{ margin: "0 auto" }}
            value = {description} onChange = {e => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btno btno-3 my-1" />
        <Link className="btno btno-3 my-1" to="/dashboard">Go Back</Link>
      </form>
    
        </Fragment>
    )
}
 
AddExperience.propTypes = {
    addExp: PropTypes.func.isRequired
}
 
export default connect(null, { addExp }) (withRouter(AddExperience))
