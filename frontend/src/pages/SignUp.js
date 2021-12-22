import React from 'react';
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const validate = values => {
    const errors = {};
    
    if (!values.codes) {
        errors.codes = 'Required';
    } else if (values.codes.length < 29) {
        errors.codes = 'Must be 29 characters or more';
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

const activateUser = async () => {
    let res = await axios.post(BACKEND_URL + '/activate_user')
    console.log(res.data)
}


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            code: '',
            username: '',
            password: ''
        },
        onSubmit: values => {
            //alert(JSON.stringify(values,null,2));
            let res = axios.post(BACKEND_URL + 'activate_user', values)
            console.log(res.data)
        },
    });
    return (
        <div class="center">
            <form onSubmit={formik.handleSubmit}>
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
            </form>
        </div>
    );
};
  
export default SignUp;