import React from 'react';
import { Navigate } from 'react-router'
import { Formik, useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit:async (values) => {
            let res = await axios.post(BACKEND_URL + 'login', values)
            if (res.data.status === 0) {
               alert("Database error")
            }
            if (res.data.status === -1) {
                alert("No user found") 
            }
            if (res.data.status === -2) {
                alert("Wrong password") 
            }
            if (res.data.status === 1) {
                localStorage.setItem('user_id', res.data.id)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('role', res.data.role)
                localStorage.setItem('misc', res.data.misc)
            }
            console.log(res.data)
            window.location.replace('/main')
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