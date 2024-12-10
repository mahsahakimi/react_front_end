import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function myFunction() {
  let myLinksElement = document.getElementById("myLinks");
  if (myLinksElement.style.display === "none") {
    myLinksElement.style.display = "block";
    alert("done");
  } else {
      myLinksElement.style.display = "none";
  };
}

window.onresize = function() {
  let myLinksElement = document.getElementById("myLinks");
  if (window.innerWidth >= 628) {
    myLinksElement.style.display = "flex"; 
  } else {
    myLinksElement.style.display = "none"; 
  };
};

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="item"><Link to="/">Home</Link></div>
        <div id="myLinks">
          <div className="item"><Link to="/Problems">Problems</Link></div>
          <div className="item"><Link to="/Teachers">Teachers</Link></div>
          <div className="item"><Link to="/Students">Students</Link></div>
          <div className="item" id="right"><Link to="/Login">Login</Link></div>
          <div className="item"><Link to="/About">About</Link></div>
          <div className="item"><Link to="/Contact">Contact us</Link></div>
        </div>
        <div className="item"><a  className="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></div>
    </nav>
  );
}
      
export default Navbar;

// #TODO