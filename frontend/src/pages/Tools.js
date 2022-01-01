import React from "react";
import { useFormik } from "formik";
import "../App.css";
import axios from "axios"
const BACKEND_URL = "http://127.0.0.1:5000/"

const getHeader = () => {
    const token = localStorage.getItem("token")
    return {
        "Authorization" : `Bearer ${token}`
    }
}

const Tools = () => {
    //const token = localStorage.getItem("token")
    const formik = useFormik({
        initialValues: {
            rolename: ""
        },
        onSubmit:async (values) => {
            let res = await axios.post(BACKEND_URL + "create", values, { headers: getHeader() })
            let notification = true
            if (res.data.status == "User has been created") {
                alert(res.data.code)
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
                <label htmlFor="rolename">Give user rolename</label>
                    <input
                        id="rolename"
                        name="rolename"
                        type="rolename"
                        onChange={formik.handleChange}
                        value={formik.values.rolename}
                />
                <button type="submit">Create user</button>
            </form>
        </div>
    );
};
  
export default Tools;