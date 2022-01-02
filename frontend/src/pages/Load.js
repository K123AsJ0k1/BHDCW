import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const getHeader = () => {
    const token = localStorage.getItem("token")
    return {
        "Authorization" : `Bearer ${token}`
    }
}

const Load = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            content: ''
        },
        onSubmit: async (values) => {
            let res = await axios.post(BACKEND_URL + 'load', values, { headers: getHeader() })
            let notification = true
            if (notification) {
                alert(res.data.status)
            }
            console.log(res.data)
        },
    });
    
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