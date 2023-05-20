import { useEffect, useState } from "react";

const Student = () => {
    const [student, setStudent] = useState({})

    useEffect(()=> {
        getStudentDetail();
    }, [])

    const getStudentDetail = async ()=> {
        const studentId = localStorage.getItem('studentId');
        const response = await fetch('https://exam-v2.vercel.app/get-student-detail', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                studentId: studentId
            })
        })
        const data = await response.json();
        console.log(data);
        setStudent(prevData => {return {...prevData, ...data.message}})
    }

    console.log(student);

    return (
        <div>
            Hii
        </div>
    )
}

export default Student;