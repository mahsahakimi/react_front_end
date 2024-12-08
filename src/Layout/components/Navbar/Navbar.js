import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#/contact">تماس با ما</a></li>
      </ul>
    </nav>
  //   <nav class="topnav">
  //     <a href="index.html" class="active">Home</a>
  //     <div id="myLinks">
  //         <a href="teacher.html">Teachers</a>
  //         <a href="student.html">Students</a>
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