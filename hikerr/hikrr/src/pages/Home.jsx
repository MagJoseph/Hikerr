import React from 'react'
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Slide left>
          <h1>HIKRR</h1>
        </Slide>
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