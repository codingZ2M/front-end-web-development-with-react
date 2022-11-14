import React from 'react'
import HomeScreen from './pages/HomeScreen'
import {Routes,  Route } from 'react-router-dom'
import Login from './pages/Login'
import Signin from './pages/Signin'

const App = () => {
  return (
    <div>
       <Routes>
            <Route  path="/" element={<Login/>} />                
            <Route  path="/signin" element={<Signin/>} />  
            <Route path='/home' element={<HomeScreen/>} />
      </Routes>
   
    </div>
  )
}

export default App