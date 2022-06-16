import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm';
import {emailContext, passwordContext} from "../components/Context";

function Login() {

  
  

  return (
    <>
        <h1>Welcome to the Login Page</h1>
        <LoginForm />
    </>
  )
}

export default Login