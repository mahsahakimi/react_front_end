import React, {useEffect} from 'react';
import './Login.css';

let handleClick = () => {};
function Login() {
  useEffect(()=>{
    handleClick = (inputId, toggleButton) => {
    // alert("4")
    const passwordInput = document.getElementById(inputId);
    const isPasswordVisible = ((passwordInput.type) === 'text');
  
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    toggleButton.classList.toggle('fa-eye', isPasswordVisible);
    toggleButton.classList.toggle('fa-eye-slash', !isPasswordVisible);
    };

    document.addEventListener("DOMContentLoaded", function() {
    alert("17")
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
  
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
  
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
      });
    });
  },)
  return(
    <div className="login-container">
        <h2>Login</h2>
        <div className="tab-container">
            <button className="tab-button active" data-tab="players">Players</button>
            <button className="tab-button" data-tab="teachers">Teachers</button>
        </div>
        
        <form id="players" className="tab-content active">
            <div className="input-box">
                <label for="player-email">Email</label>
                <input type="email" id="player-email" name="player-email" required/>
            </div>
            <div className="input-box">
                <label for="player-password">Password</label>
                <input type="password" id="player-password" name="player-password" required/>
                <i className="fa fa-eye toggle-password-btn" onClick={handleClick("player-password", this)}></i>
            </div>
            <button type="submit" className="login-btn"><a href="student/playerprofile.html">Login</a></button>
        </form>
        
        <form id="teachers" className="tab-content">
            <div className="input-box">
                <label for="teacher-email">Email</label>
                <input type="email" id="teacher-email" name="teacher-email" required/>
            </div>
            <div className="input-box">
                <label for="teacher-password">Password</label>
                <input type="password" id="teacher-password" name="teacher-password" required/>
                <i className="fa fa-eye toggle-password-btn" onClick={handleClick("teacher-password", this)}></i>
            </div>
            <button type="submit" className="login-btn"><a href="teacher/teacherprofile.html">Login</a></button>
        </form>

        <p>Don't have an account? <a href="signup.html">Sign up</a></p>
    </div>
  )
}

export default Login;