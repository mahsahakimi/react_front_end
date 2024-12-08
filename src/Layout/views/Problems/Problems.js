import React, {useState,useEffect} from 'react';
import Problem from '../../components/Problem/Problem';

const Problems = () => {
    const [problems, setProblems] = useState([]);

    useEffect(()=>{
        console.log("Loading Data ...")
        fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response=>response.json())
                .then(data=>setProblems(data))
    },[])

    return (
        <div>
            <h1>Problems Table</h1>
            <main>
                {
                    problems.map((problem)=>{
                        return <Problem key={problem.id} title={problem.title} content={problem.body}/>
                    })
                }
            </main>
        </div>
    );
}

export default Problems;

// #TODO