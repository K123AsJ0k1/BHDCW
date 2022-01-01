import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const Load = () => {
    const formik = useFormik({
        initialValues: {
            user_id: '',
            name: '',
            content: ''
        },
        onSubmit: async (values) => {
            values.user_id = localStorage.getItem('user_id')
            let res = await axios.post(BACKEND_URL + 'load', values)
            alert(res.data.status)
            console.log(res.data)
        },
    });
    
    if (localStorage.getItem('username') === null || localStorage.getItem('user_id') === null || localStorage.getItem('role') === null) {
        return (
            <div class="center">
            Load
            </div>
        );
    }

    if (localStorage.getItem("role") < 1) {
        return (
            <div class="center">
            Load
            </div>
        );
    }

    return(
        <div className='center'>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <textarea
                    id="content"
                    name="content"
                    type="content"
                    onChange={formik.handleChange}
                    value={formik.values.content} 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
  
export default Load;