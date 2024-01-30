import React, { Suspense, lazy, useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import Login from './components/User/Login';

function App() {


  return (
    <Router>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    
    </Router>
  )
}

export default App
