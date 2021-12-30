import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const Load = () => {
    let show = true
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            text: ''
        },
        onSubmit: values => {
            let res = axios.post(BACKEND_URL + 'load', values)
            console.log(res.data)
        },
    });
    
    if (localStorage.getItem("username") === null || localStorage.getItem("user_id") === null || localStorage.getItem("role") === null) {
       show = false
    }

    if (localStorage.getItem("role") < 1) {
        show = false 
    }
    
    if (show) {
        return(
            <div className='center'>
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        id="text"
                        name="text"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.text}    
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    return (
        <div class="center">
        Load
        </div>
    );
}
  
export default Load;