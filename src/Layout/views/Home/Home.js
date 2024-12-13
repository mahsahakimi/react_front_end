import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>
                Play and Learn
            </h1>
            <h4>
                With the world's largest web developer site. 
            </h4>
            <Link to="/Signup" id="big-button">Get Started</Link>
        </div>
    );
}

export default Home;

// #TODO