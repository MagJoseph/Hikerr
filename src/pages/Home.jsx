import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

import Box from "@mui/material/Box";


const Home = () => {
  const [mobile, setMobile] = useState(false)

  const isMobile = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 600) {
      setMobile(true)
    }
  }

    useEffect(() => {
    isMobile()
     }, [window])

  return (
  <div>
    {mobile ?
      ( <Box className="home-wrapper">
      <div className="home">
      <div>
        <Slide left>
          <h1>HIKRR</h1>
        </Slide>
      </div>
       <div className="home-container">
            <div className="welcome" style={{fontSize: 35, color: '#eef736'}}>Welcome!</div>
         <div className="home-link">
            <Link className="link" to="/login">
              Sign In
            </Link>
          </div>
          <div className="home-link">
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </div>
        </div>
    </div>
        </Box>
        ):(
      <Box className="home-wrapper">
        <div className="home" style={{ width: '70%' }}>
          <div>
            <Slide left>
              <h1>HIKRR</h1>
            </Slide>
          </div>
     
        </div>
        <div className="login-buttons-wrapper" style={{ width: '30%' }}>

          <div className="home-container">
            <div className="welcome" style={{ fontSize: 35 }}>Welcome!</div>
        
            <div className="home-link">
              <Link className="link" to="/login">
                Sign In
              </Link>
            </div>
            <div className="home-text">Don't have an account yet?</div>
            <div className="home-link">
              <Link to="/register" className="link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
          </Box>)}
      </div>
  );
}

export default Home