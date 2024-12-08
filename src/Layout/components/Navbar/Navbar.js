import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Teachers">Teachers</Link></li>
        <li><Link to="/Students">Students</Link></li>
        <li><Link to="/Problems">Problems</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><a href="#/contact">Contact us</a></li>
      </ul>
    </nav>
  //   <nav class="topnav">
  //     <a href="index.html" class="active">Home</a>
  //     <div id="myLinks">
  //         <a href="problems.html">Problems</a>
  //         <a href="login.html" id="right">Log in</a> 
  //         <!-- <a href="#">Profile</a> -->
  //     </div>
  //     <a  class="icon" onclick="myFunction()">
  //         <i class="fa fa-bars"></i>
  //     </a>
  // </nav>
  );
}
      

export default Navbar;

// #TODO