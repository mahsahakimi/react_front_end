import React, {useState,useEffect, useContext} from 'react';
import './Profile.css';
import AuthContext from '../../AuthContext';
import Profilecomponent from '../../components/Profilecomponent/Profilecomponent';

const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById('profileImage');
            profileImage.src = e.target.result; 
        };
        reader.readAsDataURL(file); 
    };
  };

const Profile = () => {
    const authContext = useContext(AuthContext);
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        // console.log("Loading Data ...")
        if (!students)
            alert("ho");
        // document.getElementById('imageUpload').addEventListener("change", handleChange, false);
        fetch(`http://localhost:8081/students/${authContext}`)
            .then(response=>response.json())
            .then(data=>setStudents(data))

        if (students == [])
            alert("hi");
    },)

    return (
        <div class="container">
            {/* <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-image-container">
                        <img src="profile-pic.jpg" alt="Profile Picture" id="profileImage" className="profile-image"/>
                        <input type="file" id="imageUpload" accept="image/*" />
                        <button className="upload-button" onClick={() => {document.getElementById('imageUpload').click();}}>Change Photo</button>
                    </div>
                    <h1 className="profile-name">{students.forEach(element => {element.name})}</h1>

                    <div className="profile-stats">
                        <div className="stat">
                            <h2 className="stat-number">1</h2>
                            <p className="stat-label">Followers</p>
                        </div>
                        <div className="stat">
                            <h2 className="stat-number">1</h2>
                            <p className="stat-label">Following</p>
                        </div>
                        <div>
                            <h2 className="stat-number">{students.forEach(element => {element.score})}</h2>
                            <p className="stat-label">Score</p>
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="table-container">
                    <h2>Questions Designed</h2>
                    <table className="questions-table">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Hardness</th>
                                <th>Solved</th>
                                <th>Label</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#">Sub</a></td>
                                <td>Easy</td>
                                <td><a href="#">245</a></td>
                                <td><a href="#">Math</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">N-Queen</a></td>
                                <td>Hard</td>
                                <td><a href="#">80</a></td>
                                <td><a href="#">CS</a></td>
                            </tr>
                            <tr>
                                <td><a href="problem.html">+</a></td>
                                <td>...</td>
                                <td><a href="#"></a>...</td>
                                <td><a href="#"></a>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Profile;