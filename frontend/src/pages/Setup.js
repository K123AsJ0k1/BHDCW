import React from 'react';
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios';
const BACKEND_URL = 'http://127.0.0.1:5000/';

const setupCheck = async () => {
    try {
       const res = await axios.get(BACKEND_URL + "setup");
       console.log(res)
    } catch (error) {
        console.error(error)
    }
}

const Setup = () => {
    setupCheck()
    return (
        <div class="center">
        Setup
        </div>
    );
};
  
export default Setup;