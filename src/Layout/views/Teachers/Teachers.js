import React, {useState,useEffect} from 'react';
import './Teachers.css';

function sortTableByQuestionCount() {
    let table = document.getElementById("teachersTable");
    let rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        let questiosA = parseInt(a.cells[1].innerText);
        let questionsB = parseInt(b.cells[1].innerText);
        return questionsB - questiosA; 
    });

    let tbody = table.tBodies[0];
    tbody.append(...rows);
}

const Teachers = () => {

    useEffect(()=>{
        sortTableByQuestionCount();
        // fetch("https://jsonplaceholder.typicode.com/users")
        //         .then(response=>response.json())
        //         .then(data=>setStudents(data))
    },)

    return (
        <div>
            <main>
                <h1>All Teachers</h1>
                <table id="teachersTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Question #</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">Mr. John Doe</a></td>
                            <td><a href="#">10</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Ms. Jane Smith</a></td>
                            <td><a href="#">8</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Dr. Emma Williams</a></td>
                            <td><a href="#">12</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Mr. Alex Johnson</a></td>
                            <td><a href="#">5</a></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Teachers;

// #TODO