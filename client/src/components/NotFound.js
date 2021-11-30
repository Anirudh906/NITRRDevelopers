import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cat from './images/404.gif'
const NotFound = props => {
    return (
        <div style={{textAlign:'center'}}>
        <div>
          <img src={cat} style={{ height: "375px", width: "375px" }} alt="cat"/>
        </div>
            <h1 className="text-primary redColor" >
              404 - Page not found  
            </h1>
        </div>
    )
}


export default NotFound
