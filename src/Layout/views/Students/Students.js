import React, {useState,useEffect} from 'react';
import Student from '../../components/Student/Student';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        console.log("Loading Data ...")
        fetch("https://jsonplaceholder.typicode.com/users")
                .then(response=>response.json())
                .then(data=>setStudents(data))
    },[])

    return (
        <div>
            <h1>Students Table</h1>
            <main>
                {
                    students.map((student)=>{
                        return <Student key={student.id} name={student.name} username={student.username} email={student.email} photo={"https://via.placeholder.com/150/771796"}/>
                    })
                }
            </main>
        </div>
    );
}

export default Students;

// #TODO