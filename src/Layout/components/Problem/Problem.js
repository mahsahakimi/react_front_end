import React from 'react';

const Problem = ({title, content}) => {
  return (
    <div className="problem">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Problem;

// #TODO