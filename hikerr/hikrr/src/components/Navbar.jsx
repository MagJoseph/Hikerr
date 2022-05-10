import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ handleLogOut }) => {
  return (
      <div>
          <Link to="/posts">Hikes</Link>
          <Link to="/myhikes">My Hikes</Link>
          <Link to="/search">Search</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/createpost">Add New Post</Link>
          <Link to="/yourrecordings">Your Recordings</Link>
          <Link to="/search">Search</Link>
          <Link onClick={handleLogOut} to="/"></Link>
    </div>
  )
}

export default Navbar