import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ handleLogOut, authenticated }) => {

  

 return authenticated ? (
    <div className="navnav">
      <nav className="navbar">
      <Link to="/posts">Hikes</Link>
      <Link to="/myhikes">My Hikes</Link>
      <Link to="/search">Search</Link>
      <Link to="/createpost">Add New Post</Link>
      <Link to="/yourrecordings">Your Recordings</Link>
      <Link to="/map">Maps</Link>
      <Link onClick={handleLogOut} to="/"></Link>
    </nav>;
      </div>
  
  ) : (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
  </nav>
    )
}

export default Navbar