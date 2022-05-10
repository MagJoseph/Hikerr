import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        HIKRR
        <div className="home-title">Where your adventure begins</div>
      </div>
      <div className="link-wrapper centered">
        {/* <Link to="/posts" className="item">Hiking Trails</Link> */}
        <Link to="/register" className="item1">Register</Link>
        <Link to="/login" className="item1">Login</Link>
      </div>
    </div>
  );
}

export default Home