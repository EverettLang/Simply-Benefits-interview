import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Error from './pages/Error';

 function Views(){
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default Views;



