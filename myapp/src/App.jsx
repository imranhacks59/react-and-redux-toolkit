import React, { Suspense, lazy, useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './components/User/Login';
import Layout from './components/Layout/Layout';
import Graph from './components/graph/Graph';
import PieChart from './components/graph/PieChart';

function App() {


  return (
    <Router>

      <Routes>
     
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />} >
        <Route path='/' element={<Graph />} />
         <Route path='/graph' element={<Graph />} />
         <Route path='/pie-chart' element={<PieChart />} />

        </Route>

      </Routes>
    
    </Router>
  )
}

export default App
