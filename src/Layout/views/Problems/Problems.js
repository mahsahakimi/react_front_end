import React, {useState,useEffect} from 'react';
import Problem from '../../components/Problem/Problem';
import './Problems.css';

function sortTableByQuestionCount() {
    let table = document.getElementById("problemsTable");
    let rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        let questiosA = parseInt(a.cells[2].innerText);
        let questionsB = parseInt(b.cells[2].innerText);
        return questionsB - questiosA; 
    });

    let tbody = table.tBodies[0];
    tbody.append(...rows);
}

const Problems = () => {
    const [problems, setProblems] = useState([]);

    useEffect(()=>{
        console.log("Loading Data ...")
        sortTableByQuestionCount();
        fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response=>response.json())
                .then(data=>setProblems(data))
    },)

    return (
        <div>
            {/* <h1>Problems Table</h1> */}
            {/* <main>
                {
                    problems.map((problem)=>{
                        return <Problem key={problem.id} title={problem.title} content={problem.body}/>
                    })
                }
            </main> */}
            <main>
                <h1>All Problems</h1>
                <table id="problemsTable">
                    <thead>
                        <tr>
                            <th>Problem</th>
                            <th>Hardness</th>
                            <th>Solved</th>
                            <th>Label</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        problems.map((problem)=>{
                            return <Problem key={problem.id} title={problem.title} content={problem.body}/>
                        })
                        }
                    </tbody>
                </table>
            </main>
        </div>

    );
}

export default Problems;

// #TODO