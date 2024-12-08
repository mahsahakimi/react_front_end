import React from 'react';

const Student = ({name, username, email, photo}) => {
  return (
    <div className="student">
        <h1>{name}</h1>
        <h2>{username}</h2>
        <p>{email}</p>
        <img src={photo} alt="Student Photo" width="150" height="150"/>
    </div>
  );
}

export default Student;

// #TODO