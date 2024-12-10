import React from 'react';
import '../../views/Students/Students.css';

const Student = ({name, username, email, photo}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email.charCodeAt(0)}</td>
    </tr>
  );
}

export default Student;

// #TODO

{/* <h1>{name}</h1>
        <h2>{username}</h2>
        <p>{email}</p>
        <img src={photo} alt="Student Photo" width="150" height="150"/> */}