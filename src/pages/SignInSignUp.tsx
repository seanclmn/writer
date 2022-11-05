import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { MouseEvent, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { auth } from "../Firebase"
import { useStore } from "../store/store"
import { Credentials } from "../types/AuthTypes"


// UI Components
import { 
  Button, 
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


export const SignInSignUpPage = () => {
  const [creds,setCreds]=useState({email: "", password: ""})
  const currentEmail = creds.email
  const currentPassword = creds.password
  const loggedIn = useStore((state)=>state.loggedIn)
  const setEmail = (target: HTMLInputElement) => setCreds({email: target.value, password: currentPassword })
  const setPassword = (target: HTMLInputElement) => setCreds({email: currentEmail, password: target.value })

  const onSignInPage = window.location.href.includes('signin')
  const onSignUpPage = window.location.href.includes('signup')

  const signInUser = (e: MouseEvent) => {
    e.preventDefault()
    const credentials: Credentials = creds
    signInWithEmailAndPassword(auth,credentials.email, credentials.password).then((creds)=>{
      console.log("User signed in!",creds)
    })
  }

  const signUpUser = (e: MouseEvent) => {
    e.preventDefault()
    const credentials: Credentials = creds
    createUserWithEmailAndPassword(auth,credentials.email, credentials.password).then((creds)=>{
      console.log("New user created!",creds)
      }
    )
  }

  if(loggedIn) return <Navigate to="/" />

  return(
    <>
      <FormControl 
        // style={{'display':'flex', 'flexDirection': 'column', 'width': '200px'}}
        >
        
        <FormLabel>email</FormLabel>
        <Input type="email" id="email" onChange={(e)=>setEmail(e.target)}/>
        <FormLabel>password</FormLabel>
        <Input type="text" id="password" onChange={(e)=>setPassword(e.target)}/>
  
        {onSignInPage && <Button onClick={(e)=>signInUser(e)}>Sign in</Button>}
        {onSignUpPage && <Button onClick={(e)=>signUpUser(e)}>Sign up</Button>}
      </FormControl>
    </>
  )
}