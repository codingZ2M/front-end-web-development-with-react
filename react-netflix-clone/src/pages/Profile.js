import React from 'react'
import tw from "tailwind-styled-components"
import NavBar from '../components/NavBar'

const Profile = () => {
  return (
    <ProfilePage>
      <NavBar/>
      Profile
    </ProfilePage>
  )
}

export default Profile

const ProfilePage = tw.div`
  flex flex-col items-center justify-center
`;