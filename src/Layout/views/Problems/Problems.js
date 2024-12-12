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
        // console.log("Loading Data ...")
        sortTableByQuestionCount();
        fetch("http://localhost:8081/problems")
            .then(response=>response.json())
            .then(data=>setProblems(data))
    },)

    return (
        <div>
            <main>
                <h1>All Problems</h1>
                <table id="problemsTable">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Difficulty</th>
                            <th>Solved #</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        problems.map((problem)=>{
                            return <Problem key={problem.id} title={problem.title} difficulty={problem.difficulty} solved={problem.solved} category={problem.category}/>
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