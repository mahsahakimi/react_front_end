import React from 'react';
import '../../views/Problems/Problems.css';

const Problem = ({title, difficulty, solved, category}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{difficulty}</td>
      <td>{Number(solved)}</td>
      <td>{category}</td>
  </tr>
  );
}

export default Problem;

// #TODO