import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import axios from 'axios'
import { useState } from 'react'
const BACKEND_URL = 'http://127.0.0.1:5000/' 

async function root() {
  let res = await axios.post('http://127.0.0.1:5000/')
  console.log(res.data)
}

async function create_user() {
  let res = await axios.post('http://127.0.0.1:5000/create_user')
  console.log(res.data)
}
/*
async function get_data() {
  let res = await axios.get('http://127.0.0.1:5000/profile')
  const data = res.data
  setProfileData(({
    profile_name: data.name,
    about_me: data.name}))
}
*/
/*
function root() = async() => {
  try {
    const res = 
    return true
  } catch (err) {
    return null
  }
}
*/
/*
function root() {
  fetch('http://127.0.0.1:5000/')
}



function create_user() {
  fetch('http://127.0.0.1:5000/create_user', {
    method: 'POST',
    mode: 'cors'
  })
}
*/


function App() {
  const [profileData, setProfileData] = useState(null)
  
  async function get_data() {
    let res = await axios.get('http://127.0.0.1:5000/profile')
    const data = res.data
    setProfileData(({
      profile_name: data.name,
      about_me: data.about}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="form">
          <form action="http://127.0.0.1:5000/result" method='get'>
            Place: <input type="text" name="place"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <button onClick={root}> 
          Testi
        </button>
        <button onClick={create_user}> 
          Luo käyttäjä
        </button>
        <p>To get your profile details: </p><button onClick={get_data}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
