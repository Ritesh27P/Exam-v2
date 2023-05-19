import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({name: "", email: "", password: ""})
    const navigate = useNavigate();
    const AdminRegister = async () => {
        const response = fetch('https://exam-v2.vercel.app/auth/register/admin', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })

        const data = (await response).json();
        if (response.ok) navigate('/login', {replace: true})
        console.log(data);
    }

    const onChange = e => {
        e.preventDefault();
        setValue(prevData=> {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AdminRegister();
    }

    return (
        <div>
            <input onChange={onChange} type="text" name="name" value={user.name} placeholder="Name your channel" />
            <input onChange={onChange} type="text" name="email" value={user.email} placeholder="email" />
            <input onChange={onChange} type="password" name="password" value={user.password} placeholder="password" />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}