import React from 'react';
import './ProblemReader.css';

const ProblemReader = ({title, content, option_1, option_2, option_3, option_4}) => {
  return (
    <main>
        <h1>
            {title}
        </h1>
        <span style="font-size: x-large;">
            <p>
                {content}
            </p>
            <p>
                1.{option_1}
                2.{option_2}
                3.{option_3}
                4.{option_4}
            </p>
        </span>            
    </main>
  );
};

export default ProblemReader;