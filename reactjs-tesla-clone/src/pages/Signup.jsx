import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/FirebaseAuthContext';

const Signup = () => {
 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

const {createUser} = UserAuth();

const handleSubmit = async (e)=> {
    e.preventDefault()
    setError('')
    try {
        await createUser(email, password);
    }
    catch (e) {
        setError(e.message)
        console.log(e.message)
    }
}

  return (
    <SignupContainer>
   
      <SignupBox>
          <Heading>Sign Up Free Account</Heading>
          <p className='pb-6 '>
            Already have an account?
            <Link to ="/signin" className='underline pl-2'>Signin</Link>
          </p>
          <FormContainer onSubmit={handleSubmit} >
              <FormBox  >
                  <Input type="text" value={email} placeholder="Email" required
                    onChange={(event) => {setEmail(event.target.value)}}
                  />
                  <Input type="text" value={password} placeholder="Password" required 
                    onChange={(event) => {setPassword(event.target.value)}}
                  />
                  <CreateAccountButton>SIGN UP</CreateAccountButton>
              </FormBox>
          </FormContainer>
      </SignupBox>
  </SignupContainer>
  )
}

export default Signup


const SignupContainer = tw.div`
    flex flex-col w-full h-full items-center justify-center 
`;
const SignupBox = tw.div`
    absolute top-32 flex flex-col items-center justify-center 
`;
const Heading = tw.h1`
    p-6 text-3xl font-bold text-black
`;
const FormContainer = tw.form``;

const FormBox = tw.div`
    flex flex-col items-center justify-center w-full 
`;

const Input = tw.input`
    w-80 sm:w-[500px] h-[50px] p-3 text-small text-black border-none bg-slate-100  mb-4
`;


const CreateAccountButton = tw.button`
    flex justify-center items-center text-[15px]  text-white
    bg-[#3D69E1] h-[50px] w-80 sm:w-[500px] cursor-pointer my-4
`;
    
