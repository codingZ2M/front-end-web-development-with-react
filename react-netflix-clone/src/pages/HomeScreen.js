import React, {useEffect} from 'react'
import HomeBanner from '../components/HomeBanner'
import {auth, onAuthStateChanged} from '../firebase'
import  { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect (  ()=> {
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            navigate(`/`)
        }
    }  )
},  );


  return (
    <div className='mt-20'>
      <NavBar/>
      <HomeBanner/>
    </div>
  )
}

export default HomeScreen