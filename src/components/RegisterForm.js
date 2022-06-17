import React, {useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {emailContext, passwordContext, firstnameContext, lastnameContext, returnmessageContext} from "../components/Context";


function RegisterForm() {

    const navigate = useNavigate();

    const {email, setEmail} = useContext(emailContext);
    const {password, setPassword} = useContext(passwordContext);
    const {firstname, setFirstName } = useContext(firstnameContext);
    const {lastname, setLastName } = useContext(lastnameContext);
    const {returnMessage, setReturnMessage} = useContext(returnmessageContext);

    /**
     * Register Sumbit function, makes backend call to determine if register credentials are pass then forwards to "profile" page
     * @param  event Button Event
     */
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('https://simply-b-interview.herokuapp.com/register',{"firstname" : firstname, "lastname" : lastname, "email" : email, "password" : password});
            console.log(response.data);

            /**
             * After Succesful Registration user info is stored and token is set
             */
            if(response.data.message == "Register Succsessful"){
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
    <div className="register-container">
      <h1>Register Now</h1>
        <form className="register-form-container" onSubmit={handleFormSubmit}>
            <input type="text" name="firstname" autoComplete="off" required placeholder="First Name" onChange={(e) => {setFirstName(e.target.value);}}/>
            <input type="text" name="lastname" autoComplete="off" required placeholder="Last Name" onChange={(e) => {setLastName(e.target.value);}}/>
            <input type="text" name="username" autoComplete="off" required placeholder="Email" onChange={(e) => {setEmail(e.target.value);}}/>
            <input type="password" name="password" autoComplete="off" required placeholder="Password" onChange={(e) => {setPassword(e.target.value);}} />
            <input className='submit-button' type="submit" value="Register"/>
        </form>
        <div className='register-message'>{returnMessage}</div>
        <p>or</p>
        <button className="return-login-button" onClick={() =>{setReturnMessage(""); navigate('/login');}}>Return to Login</button>
    </div>
  )
}

export default RegisterForm