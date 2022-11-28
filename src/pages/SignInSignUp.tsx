import { MouseEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import { useStore } from "../store/store"

// hooks
import { useSignInUser, useSignUpUser } from "../hooks/auth/AuthHooks"

// UI Components
import { 
  Button, 
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useGetUsers } from "../hooks/get/ReadUserDataHooks"

export const SignInSignUpPage = () => {
  const [creds,setCreds]=useState({email: "", password: ""})
  const {email: currentEmail, password: currentPassword} = creds
  const loggedIn = useStore((state)=>state.loggedIn)

  const setEmail = (target: HTMLInputElement) => setCreds({email: target.value, password: currentPassword })
  
  const setPassword = (target: HTMLInputElement) => setCreds({email: currentEmail, password: target.value })

  const signInUser = (e: MouseEvent) => {
    e.preventDefault()
    useSignInUser(creds)
  }

  const signUpUser = (e: MouseEvent) => {
    e.preventDefault()
    useSignUpUser(creds)
  }

  if(loggedIn) return <Navigate to="/" />

  return(
      <FormControl 
        style={{'display':'flex', 'flexDirection': 'column', 'alignItems': 'center'}}
        >
        
        <FormLabel>email</FormLabel>
        <Input 
          style={{'width':'250px'}}
          type="email" 
          id="email" 
          onChange={(e)=>setEmail(e.target)}
          />
        <FormErrorMessage>Email is required</FormErrorMessage>

        <FormLabel>password</FormLabel>
        <Input 
          style={{'width':'250px'}}
          type="text" 
          id="password" 
          onChange={(e)=>setPassword(e.target)}
          />
        {/* <FormErrorMessage>Password is required</FormErrorMessage> */}

  
        {window.location.href.includes('signin') && <Button onClick={(e)=>signInUser(e)}>Sign in</Button>}
        { window.location.href.includes('signup') && <Button onClick={(e)=>signUpUser(e)}>Sign up</Button>}
      </FormControl>
  )
}