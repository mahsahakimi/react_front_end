// import React,{useState,useEffect} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import './Layout.css';
import Home from './views/Home/Home';
import Teachers from './views/Teachers/Teachers';
import Students from './views/Students/Students';
import Problems from './views/Problems/Problems';
import About from './views/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AuthContext from './AuthContext';

const Layout = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Teachers" element={<Teachers/>} />
          <Route path="/Students" element={<Students/>} />
          <Route path="/Problems" element={<Problems/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;