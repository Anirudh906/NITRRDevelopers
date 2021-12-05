import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExp } from '../actions/profile';
const Experience = props => {
    const experiences = props.experience.map(
        exp => (
            <tr key = { exp._id }>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>
               <Moment format = 'YYYY/MM/DD'>{exp.from}</Moment> - {
                   exp.to === null ? ('Now') : (<Moment format = 'YYYY/MM/DD'>{exp.to}</Moment>)
               }   
              </td>
              <td><button className = 'btnexp btnexp-3' style={{height: '40px', width:'100px', padding:'0', margin:'0'}} onClick = {() => props.deleteExp(exp._id)}> Delete </button></td>
            </tr>
        )
    );

   
    return (
        <Fragment>
        
        <h2 className = "my-2" style= {{textAlign:'center', marginTop: '50px', color:'#fe8493'}}>Experience Credentials</h2>
        <table className= "table" style ={{margin: 'auto', backgroundColor:'transparent'}}>
            <thead>
                <tr>
                    <th>
                        Company
                    </th>
                    <th >
                        Title
                    </th>
                    <th >
                        Years
                    </th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {experiences}
            </tbody>
        </table>
        </Fragment>
    )
}

Experience.propTypes = {
experience: PropTypes.array.isRequired,
deleteExp: PropTypes.func.isRequired 
}

export default connect(null, {deleteExp})(Experience);
