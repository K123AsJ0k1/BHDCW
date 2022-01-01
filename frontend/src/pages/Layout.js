import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../App.css';

const Layout = () => {
  let navigate = useNavigate()
  function logout() {
    localStorage.clear();
    navigate('/')
    window.location.reload();
  }

  if (localStorage.getItem("username") === null) {
    return (
      <>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </>
    )
  } else {
    return ( 
      <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/load">Load</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>Logout</Link>
        </li>
      </ul>

      <Outlet />
    </>
    )
  }
};

export default Layout;
