import React from 'react'
import { Link } from 'react-router-dom';
 const DashControls = () => {
    return (
      <div className="dashbutton" style={{ textAlign: "center" }}>
        <Link to="/edit-profile" className="btno btno-3">
          Edit Profile
        </Link>
        <Link to="/add-experience" className="btno btno-3">
          Add Experience
        </Link>
      </div>
    );
}

export default DashControls;