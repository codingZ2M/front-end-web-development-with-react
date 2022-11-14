import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CarModelSpec from './components/shop/CarModelSpec';
import {Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { AuthContextProvider } from './context/FirebaseAuthContext';

const App = () => {
  return (
    <div>
      <NavBar/>
      <AuthContextProvider>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/carModelSpec/:selectedCarModel/" element={<CarModelSpec/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<Account/>} />
      </Routes>
      </AuthContextProvider>
    </div>

  )
}

export default App