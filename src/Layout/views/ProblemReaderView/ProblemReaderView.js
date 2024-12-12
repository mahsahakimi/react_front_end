import React, {useState,useEffect} from 'react';
import ProblemReader from '../../components/ProblemReader/ProblemReader';

const ProblemReaderView = ({title}) => {
    const [problems, setProblems] = useState([]);

    useEffect(()=>{
        console.log("Loading Data ...")
        sortTableByScore();
        fetch(`http://localhost:8081/problems/${title}`)
            .then(response=>response.json())
            .then(data=>setProblems(data))
    },[])

    return (
        <div>
            {
            problems.map((problem)=>{
                return <ProblemReader key={problem.id} title={problem.title} content={problem.content} option_1={problem.option_1} option_2={problem.option_2} option_3={problem.option_3} option_4={problem.option_4}/>
            })
            }
        </div>
    );
}

export default ProblemReaderView;
