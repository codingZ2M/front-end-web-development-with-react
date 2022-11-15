import React, {useEffect} from 'react'
import HomeBanner from '../components/HomeBanner'
import {auth, onAuthStateChanged} from '../firebase'
import  { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MovieGrid from '../components/MovieGrid'

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
    <>
      <NavBar/>
      <div className='mt-0 flex flex-col items-center justify-center'>
        <HomeBanner/>
        <MovieGrid/>
      </div>
    </>
  )
}

export default HomeScreen