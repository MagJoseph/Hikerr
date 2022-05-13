import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ handleLogOut, authenticated }) => {

  

 return authenticated ? (
   <div className="navnav">
     <nav className="navbar">
       <Link className="nav-item" to="/posts">Hikes</Link>
       <Link className="nav-item" to="/myhikes">My Hikes</Link>
       <Link className="nav-item" to="/search">Search</Link>
       <Link className="nav-item" to="/createpost">Add New Post</Link>
       <Link className="nav-item" to="/yourrecordings">Your Recordings</Link>
       <Link className="nav-item" to="/map">Maps</Link>
       <Link className="nav-item" to="/weather">Weather</Link>
       <Link className="nav-item" onClick={handleLogOut} to="/">Log Out</Link>
     </nav>
  </div>
 ) : (
   <nav>
     <Link to="/login">Login</Link>
     <Link to="/register">Register</Link>
   </nav>
 );
}

export default Navbar