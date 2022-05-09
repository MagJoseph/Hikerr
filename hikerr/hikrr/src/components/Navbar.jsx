import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
          <Link to="/posts">Hikes</Link>
          <Link to="/myhikes">My Hikes</Link>
          <Link to="/search">Search</Link>
    </div>
  )
}

export default Navbar