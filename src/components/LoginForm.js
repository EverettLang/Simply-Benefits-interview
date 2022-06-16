import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {emailContext, passwordContext, firstnameContext, lastnameContext} from "../components/Context";
import axios from 'axios';

function LoginForm() {

  const navigate = useNavigate();

  const {email, setEmail} = useContext(emailContext);
  const {password, setPassword} = useContext(passwordContext);
  const {firstname, setFirstName } = useContext(firstnameContext);
  const {lastname, setLastName } = useContext(lastnameContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
     const response = await axios.post('http://localhost:4000/login',{"email" : email, "password" : password});
      console.log(response.data);
      if(response.data.message == "Login Succsessful"){
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setPassword(response.data.password);
        navigate('/home');
      }
    }
    catch (err){
      console.log(err);
    }
    
  };


  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="username" autoComplete="off" required onChange={(e) => {setEmail(e.target.value);}}/>
            <input type="password" name="password" autoComplete="off" required onChange={(e) => {setPassword(e.target.value);}} />
            <input type="submit"/>
        </form>
        <p>or</p>
        <button onClick={() => navigate('/register')}>Register</button>
    </>
  )
}

export default LoginForm