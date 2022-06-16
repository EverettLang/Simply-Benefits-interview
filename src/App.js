import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Views from './Views';
import {emailContext, passwordContext, firstnameContext, lastnameContext} from "./components/Context";

import './styling/App.css';
 

function App() {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const [firstname, setFirstName ] = useState('');
  const [lastname, setLastName ] = useState('');

  return (
    <BrowserRouter>
      
        <firstnameContext.Provider value={{firstname, setFirstName}} >
          <lastnameContext.Provider value={{lastname, setLastName}} >
            <emailContext.Provider value={{email, setEmail}}>
              <passwordContext.Provider value={{password, setPassword}}> 
                <Views />
              </passwordContext.Provider>
            </emailContext.Provider>
          </lastnameContext.Provider>
        </firstnameContext.Provider>

    </BrowserRouter>
  );
}

export default App;
