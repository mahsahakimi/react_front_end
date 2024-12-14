import React, {useState,useEffect, useContext} from 'react';
import './Profile.css';
import AuthContext from '../../contexts/AuthContext';
import TypeContext from '../../contexts/TypeContext';
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

  const handleClick = () => {
    document.getElementById('imageUpload').click();
  };

const Profile = () => {
    const authContext = useContext(AuthContext);
    const typeContext = useContext(TypeContext);
    const [person, setPerson] = useState({});

    useEffect(()=>{
        // console.log("Loading Data ..."
        if (typeContext === 's')
            fetch(`http://localhost:8081/students/${authContext}`)
                    .then(response=>response.json())
                    .then(data=>setPerson(data))
        else
            fetch(`http://localhost:8081/teachers/${authContext}`)
                .then(response=>response.json())
                .then(data=>setPerson(data))

        document.getElementById('imageUpload').addEventListener("change", handleChange, false);
    },)
    return (
        <div className="container">
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-image-container">
                        <img src="profile-pic.jpg" alt="Profile Picture" id="profileImage" className="profile-image" />
                        <input type="file" id="imageUpload" accept="image/*" />
                        <button className="upload-button" onClick={handleClick}>Change Photo</button>
                    </div>
                    <Profilecomponent key={person.id} name={person.name} score={person.score} created={person.created} followers={person.followers} followings={person.followings}/>
                </div>
            </div>

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
                            <td><a href="#">{typeContext}</a></td>
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