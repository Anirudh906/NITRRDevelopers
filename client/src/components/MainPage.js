import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import walkingCode from './images/bongo-cat-code.png';

 

 const MainPage = () => {
    return (
      <section className="landing">
        <div>
          <div className="landing-inner">
            <img alt= "main" src= {walkingCode} style={{height: '150px', width:'250px'}} />


           


            <h1 className="x-large">&#60; NITRR Developers &#47; &#62;</h1>
            <p className="lead">Connect with developers of NITRR.</p>
            <div className="buttons">
              <Link to = "/register" className="btn btn-3">
                 Sign Up
               </Link>
              <Link to = "/login" className="btn btn-3">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}
export default MainPage;
