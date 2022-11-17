import React, {useEffect} from 'react'
import HomeBanner from '../components/HomeBanner'
import  { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MovieGrid from '../components/MovieGrid'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const HomeScreen = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect (  ()=> {
        if (!user) {
            navigate(`/signin`)
        }
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