import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/authContext.jsx";

const Login = () => {
  const[inputs, setInputs] = useState({
    username:"",
    password:"",
  })

const [err, setError] = useState(null);

const navigate = useNavigate();
const { login } = useContext(AuthContext);

const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(inputs)
    //await axios.post("http://localhost:8800/BackEnd/auth/login", inputs);
    //console.log(res)
    navigate("/");
  } catch (err) {
    setError(err.response.data);
  }
};
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login