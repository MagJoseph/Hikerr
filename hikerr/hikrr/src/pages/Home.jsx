import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <span>H</span>
        <span>I</span>
        <span>K</span>
        <span>R</span>
        <span>R</span>
        <div className="title">Where your adventure begins</div>
      </div>
      <div className="link-wrapper centered">
        {/* <Link to="/posts" className="item">Hiking Trails</Link> */}
        <br></br>
        <div className="land-container">
          <div className="landing">
            <Link to="/register" className="link">
              Register
            </Link>
          </div>
          <div className="landing">
            <Link className="link" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home