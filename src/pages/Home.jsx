import React from 'react'
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

import Box from "@mui/material/Box";



const Home = () => {
  return (
    <Box className="home">
      <div>
        <Slide left>
          <h1>HIKRR</h1>
        </Slide>
      </div>
      <div className="link-wrapper centered">
       <br/>
        <div className="land-container">
          <div className="landing">
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </div>
          <div className="landing">
            <Link className="link" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Home