import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  function logout() {
    localStorage.clear();
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
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/load">Load</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
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
