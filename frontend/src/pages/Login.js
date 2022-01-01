import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit:async (values) => {
            let res = await axios.post(BACKEND_URL + "login", values)
            let notification = true
            if (res.data.status === "The user is logged in") {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user_id", res.data.id)
                localStorage.setItem("username", res.data.username)
                localStorage.setItem("role", res.data.role)
                localStorage.setItem("misc", res.data.misc)
                navigate("/home")
                notification = false 
            }
            if (notification) {
                alert(res.data.status)
            }
            console.log(res.data)
        },
    });
    
    return (
        <div class="center">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    ); 
};

export default Login;