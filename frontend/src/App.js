import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Layout from "./pages/Layout"
import Welcome from "./pages/Welcome"
import Main from "./pages/Main"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="main" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



