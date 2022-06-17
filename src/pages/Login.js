import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm';
import {emailContext, passwordContext} from "../components/Context";
import "../styling/login.css";

function Login() {
  return (
    
    <div className="login-container">
      <div className="login-title-container">
        <h1 className="title">Simply Login</h1>
        <h2 className="subtitle">Please Login or Register</h2> 
      </div>
      <LoginForm />
    </div>
    
  )
}

export default Login