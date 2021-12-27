import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Layout from "./pages/Layout"
import Welcome from "./pages/Welcome"
import Main from "./pages/Main"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Load from "./pages/Load"
import List from "./pages/List"
import Tools from "./pages/Tools"
import Forum from "./pages/Forum"
import Download from "./pages/Download"
import Editor from "./pages/Editor"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="main" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="load" element={<Load />} />
          <Route path="list" element={<List />} />
          <Route path="tools" element={<Tools />} />
          <Route path="forum" element={<Forum />} />
          <Route path="download" element={<Download />} />
          <Route path="editor" element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



