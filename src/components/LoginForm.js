import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {emailContext, passwordContext, firstnameContext, lastnameContext, returnmessageContext} from "../components/Context";
import axios from 'axios';

function LoginForm() {

  const navigate = useNavigate();
  const {email, setEmail} = useContext(emailContext);
  const {password, setPassword} = useContext(passwordContext);
  const {firstname, setFirstName } = useContext(firstnameContext);
  const {lastname, setLastName } = useContext(lastnameContext);
  const {returnMessage, setReturnMessage} = useContext(returnmessageContext);

  /**
   * @desc Login Sumbit function, makes backend call to determine if login credentials are correct then forwards to "profile" page
   * @param event Button click event 
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('https://simply-b-interview.herokuapp.com/login',{"email" : email, "password" : password});
      console.log(response.data);

      /**
       * Stores user data on sucsessful login request and creates token.
       */
      if(response.data.message == "Login Succsessful"){
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setPassword(response.data.password);
        setReturnMessage("");
        sessionStorage.setItem('simply-token', JSON.stringify({"firstname" : response.data.firstname, "lastname" : response.data.lastname, "email" : response.data.email}));
        navigate('/home');
      }
      else{
        setReturnMessage(response.data.message);
      }
    }
    catch (err){
      console.log(err);
    }
    
  };


  return (
    <div className='login-form-container'>
        <form className="form-container" onSubmit={handleFormSubmit}>
            <input type="text" name="username" autoComplete="off" placeholder='Email' required onChange={(e) => {setEmail(e.target.value);}}/>
            <input type="password" name="password" autoComplete="off" placeholder='Password' required onChange={(e) => {setPassword(e.target.value);}} />
            <input className='login-button' type="submit" value="Login"/>
        </form>
        <div className="login-message">{returnMessage}</div>
        <p>or</p>
        <button className='register-button' onClick={() =>{setReturnMessage(""); navigate('/register');}}>Register</button>
    </div>
  )
}

export default LoginForm