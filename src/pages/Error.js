import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../styling/error.css'

function Error() {

    const navigate = useNavigate();


    const abort = () => {
        navigate('/');
        sessionStorage.removeItem('simply-token');
    };


  return (
    <div className='error-container'>
        <h1>Sorry You Found a Glitch</h1>
        <button onClick={abort}>Abort</button> 
    </div>
  )
}

export default Error