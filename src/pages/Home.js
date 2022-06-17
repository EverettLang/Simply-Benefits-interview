import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {emailContext, passwordContext, firstnameContext, lastnameContext} from "../components/Context";
import "../styling/home.css";
function Home() {

  const navigate = useNavigate();

  const {email, setEmail} = useContext(emailContext);
  const {password, setPassword} = useContext(passwordContext);
  const {firstname, setFirstName} = useContext(firstnameContext);
  const {lastname, setLastName} = useContext(lastnameContext);

    /**
     * Function to check if fake auth token is stored
     * @returns Bool 
     */
  const checkToken = () => {
    if(sessionStorage.getItem('simply-token')) {
      return true;
    }
    else{
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('simply-token');
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    navigate('/login');
  };

  const backToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="outer">
      {checkToken() ?
        <div className="home-container">
          <div className="home-inner-container">
            <div className="data">First Name: {firstname}</div>
            <div className="data">Last Name: {lastname}</div>
            <div className="data">Email: {email}</div>
            <div className="data">Encypted Password: {password}</div>
          </div>
          <button className='logout' onClick={logout}>Logout</button>
        </div>
        : <button className='back-to-login' onClick={backToLogin}>Please Login</button>
      }
    </div>
    
  )
}

export default Home