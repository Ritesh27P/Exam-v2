import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [user, setValue] = useState({email: "", password: ""})
    const [isAdmin, setIsAdmin] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        if (isAdmin) return AdminLogin();
        StudentLogin();
    }

    const AdminLogin = async ()=> {
        const response = await fetch('https://exam-v2.vercel.app/auth/login/admin', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })

        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('adminId', data.message._id);
        navigate('/admin', {replace: true})
    }

    const StudentLogin = async () => {
        const response = await fetch('https://exam-v2.vercel.app/auth/login/student', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('studentId', data.message._id);
        navigate('/student', {replace: true})

    }

    const onChange = e => {
        e.preventDefault();
        setValue(prevData=> {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }


    return (
        <div>
                <input onClick={(e)=> {setIsAdmin(!isAdmin)}} type="checkbox" id="isAdmin" name="isAdmin" value="isAdmin"></input>
                <label for="isAdmin"> I'm Admin</label><br></br>
                <input onChange={onChange} type="text" placeholder="email" name="email"/>
                <input onChange={onChange} type="text" placeholder="password" name="password"/>
                <button onClick={handleSubmit}>Login</button>

        </div>
    )
}

export default Login;