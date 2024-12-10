import React from 'react';
import '../../views/Problems/Problems.css';

const Problem = ({title, content}) => {
  return (
    // <div className="problem">
    //   <h2>{title}</h2>
    //   <p>{content}</p>
    // </div>
    <tr>
      <td>{title}</td>
      <td>{content.charAt(0)}</td>
      <td>{content.charCodeAt(0) + 5}</td>
      <td>{content}</td>
  </tr>
  );
}

export default Problem;

// #TODO