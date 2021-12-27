import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios'
const BACKEND_URL = 'http://127.0.0.1:5000/'

const Load = () => {
    const formik = useFormik({
        initialValues: {
            text: ''
        },
        onSubmit: values => {
            let res = axios.post(BACKEND_URL + 'load', values)
            console.log(res.data)
        },
    });
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
  
export default Load;