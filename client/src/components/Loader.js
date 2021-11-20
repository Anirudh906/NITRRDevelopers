import React, { Fragment } from 'react';

const Loader = () => {
    return (
      <Fragment>
        <div
          style={{ color: "rgb(253, 52, 52)" }}
          className="la-ball-scale-ripple-multiple la-2x"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Fragment>
    );
}

export default Loader;