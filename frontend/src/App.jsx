import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './views/User/Register.jsx';
import { Login } from './views/User/Login.jsx';
function App() {
  return(
    
    <Routes>
      <Route element={<Register/>} path='/Register' />
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
  
}

export default App;
