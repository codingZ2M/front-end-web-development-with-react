import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import  { useNavigate } from 'react-router-dom'

import {auth, provider, signInWithPopup, onAuthStateChanged} from '../firebase'

const Signin = ({}) => {
    const navigate = useNavigate();

    useEffect ( ()=> {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
               navigate("/home");
            }
        }  )
    },  );

    const handleAuth = () => {
        signInWithPopup(auth, provider).then( (result) => {
          console.log(result);
            navigate("/home");
          }).catch((error)=> {
             alert(error.message);
         })
}

  return (
    <SigninContainer>
       <Overlay/>
            <img 
                src="https://images.pexels.com/photos/9810364/pexels-photo-9810364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className='w-full h-screen object-cover'
                alt="Background Image"
            />
    <SigninBox>
        <Heading>Sign In</Heading>
        <FormContainer>
            <FormBox>
                <Input type="text" placeholder="Email or Phone Number" required className='text-sm'/>
                <Input type="text" placeholder="Password" required className='text-sm' />
                <SigninButton onClick="">Sign In</SigninButton>
                <TextHelp>Need Help? </TextHelp>
                <GoogleSigninButton  onClick={handleAuth} >
                    <img src="/images/google.svg" alt="User" width={40} height={40}/>
                     Sign In with Google
                </GoogleSigninButton>
                <TextSignup>New to Netflix? Sign up now </TextSignup>
                <Paragraph>
                    This page is protected by Google reCAPTCHA to ensure youre not a bot. Learn more
                </Paragraph>
            </FormBox>
        </FormContainer>
    </SigninBox>
</SigninContainer>
  )
}

export default Signin

const SigninContainer = tw.div`
    flex w-full h-full items-center justify-center 
`;
const Overlay = tw.div`
    absolute w-full h-screen bg-gradient-to-l from-black
`;
const SigninBox = tw.div`
    absolute top-32 sm:top-24 opacity-80 bg-black  w-11/12 sm:w-[450px] h-[650px] z-10  border-none
`;
const Heading = tw.h1`
    p-6 text-3xl text-white
`;
const FormContainer = tw.form``;

const FormBox = tw.div`
    flex flex-col items-center justify-center w-full mt-1 
`;

const Input = tw.input`
    w-80  h-12 p-3 text-xl text-white border-none bg-[#333333] rounded-md mb-8
`;
    
const SigninButton = tw.button`
    flex justify-center items-center text-base text-white
    bg-[#E50914] h-12 w-80 rounded-md cursor-pointer
`;
    
const TextHelp = tw.span`
    text-sm tracking-wide text-white no-underline my-3
`;
const GoogleSigninButton = tw.button`
    w-80 h-12 rounded-md border-none
    flex gap-1 items-center justify-center bg-white
    text-black text-base my-4
`;

const TextSignup = tw.span`
    text-sm tracking-wide text-white no-underline my-2 
`;

const Paragraph = tw.p`
    pb-9 text-sm tracking-wide text-white no-underline my-2 w-80 
`;
    