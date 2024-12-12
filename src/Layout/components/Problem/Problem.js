import React from 'react';
import '../../views/Problems/Problems.css';

const Problem = ({title, difficulty, solved, category, content, option_1, option_2, option_3, option_4}) => {
  return (
  <tr>
    <td>{title}</td>
    <td><p>{content}
       1.{option_1}
       2.{option_2}
       3.{option_3}
       4.{option_4}</p></td>
    <td>{difficulty}</td>
    <td>{Number(solved)}</td>
    <td>{category}</td>
  </tr>
  );
}

export default Problem;

// #TODO