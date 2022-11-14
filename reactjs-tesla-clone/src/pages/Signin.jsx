import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <SigninContainer>
   
      <SigninBox>
          <Heading>Sign Into Your Account</Heading>
          <p className='pb-6 '>
            Don't have an account yet?
            <Link to ="/signup" className='underline pl-2'>Sign up</Link>
          </p>
          <FormContainer >
              <FormBox  >
                  <Input type="text" value='' placeholder="First Name" required
                    onChange={(event) => {}}
                  />
                  <Input type="text" value='' placeholder="Last Name" required 
                    onChange={(event) => {}}
                  />
                  <CreateAccountButton onClick="">SIGN IN</CreateAccountButton>
              </FormBox>
          </FormContainer>
      </SigninBox>
  </SigninContainer>
  )
}

export default Signin


const SigninContainer = tw.div`
    flex flex-col w-full h-full items-center justify-center 
`;
const SigninBox = tw.div`
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
    w-80 sm:w-96 h-10 p-3 text-small text-black border-none bg-slate-100  mb-4
`;


const CreateAccountButton = tw.button`
    flex justify-center items-center text-[12px] font-bold text-white
    bg-[#3D69E1] h-10 w-80 sm:w-96 cursor-pointer my-4
`;
    
