import React from 'react';
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const validate = values => {
    const errors = {};
    
    if (!values.code) {
        errors.code = 'Required';
    } else if (values.code.length < 29) {
        errors.code = 'Must be 29 characters or more';
    }
    
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 5) {
        errors.username = 'Must be 5 characters or more';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
    }
    
    return errors;
};

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            code: '',
            username: '',
            password: ''
        },
        validate,
        onSubmit:async (values) => {
            let res = await axios.post(BACKEND_URL + 'signup', values)
            let notification = true
            if (res.data.status === "User has been activated") {
                localStorage.setItem("token", res.data.token)
                window.location.replace('/home')
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
                <div class="container">
                    <label htmlFor="code">Activation code</label>
                    <input
                        id="code"
                        name="code"
                        type="code"
                        onChange={formik.handleChange}
                        value={formik.values.code}
                    />
                    {formik.errors.code ? <div>{formik.errors.code}</div> : null}

                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
  
export default SignUp;