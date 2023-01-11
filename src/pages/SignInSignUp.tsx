import { MouseEvent, useEffect, useState } from "react"
import { Navigate,useLocation,Link } from "react-router-dom"
import { useStore } from "../store/store"
import {Heading, Spacer} from '@chakra-ui/react'

// hooks
import { signInUser, signUpUser } from "../hooks/auth/AuthHooks"

// UI Components
import { 
  Button, 
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react'
import { useGetUsers } from "../hooks/get/ReadUserDataHooks"
import { Controller, useForm } from "react-hook-form"

interface CredsInputs {
  email: string
  password: string
  username?: string
}

export const SignInSignUpPage = () => {
  const [loading,setLoading]=useState(false)
  const [demoLoading,setDemoLoading]=useState(false)
  const currentRoute = useLocation().pathname.slice(1)
  const loggedIn = useStore((state)=>state.loggedIn)

  const logIn = ({email,password}:CredsInputs) => {
    signInUser({email,password})
    setLoading(true)
  }

  const signUp = (data:CredsInputs) => {
    signUpUser(data)
    setLoading(true)
  }

  const demoLogin = () => {
    signInUser({email: `${import.meta.env.VITE_DEMO_EMAIL}`,password: `${import.meta.env.VITE_DEMO_PASSWORD}`})
    setDemoLoading(true)
  }

  const { reset, control, register, handleSubmit, watch, formState: { errors } } = useForm<CredsInputs>(
    {
      defaultValues: {
        email: "",
        password: "",
        username: ""
      }
    }
  );

  useEffect(()=>{
    reset()
  },[currentRoute])

  if(loggedIn) return <Navigate to="/" />

  return(
    <FormControl 
      style={{'display':'flex', 'flexDirection': 'column', 'alignItems': 'center'}}
      pt={10}
      height={"100vh"}
      backgroundImage={"https://wallpaperaccess.com/full/4512665.jpg"}
      backgroundSize="cover"
      >

      <Heading mb="30" color="white" fontFamily="'Montserrat', sans-serif">Welcome to <span style={{color:"#0BC5EA"}}>Writer</span></Heading>

      { currentRoute === 'signup' && 
        <>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value } })=>(
              <Input 
                placeholder="Username" 
                colorScheme="cyan"
                variant='filled'
                value={value}
                mb="5"
                maxW={300}
                onChange={onChange}
              />
            )}
          />
          {/* <FormErrorMessage>{errors.message}</FormErrorMessage> */}
        </>
      }
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } })=>(
          <Input 
            placeholder="Email" 
            variant='filled'
            value={value}
            mb="5"
            maxW={300}
            onChange={onChange}
          />
        )}
      />
      <FormErrorMessage>Email is required</FormErrorMessage>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } })=>(
          <Input 
            placeholder="Password" 
            variant='filled'
            value={value}
            mb="5"
            maxW={300}
            onChange={onChange}
          />
        )}
      />
      { currentRoute === 'signin' ? 
        <Button colorScheme="cyan" color="white" mt="5" width={"100%"} maxW={300} onClick={handleSubmit(logIn)} isLoading={loading}>Sign in</Button>:
        <Button colorScheme="cyan" color="white" mt="5" width={"100%"} maxW={300} onClick={handleSubmit(signUp)} isLoading={loading}>Sign up</Button>
      }

      <Button colorScheme="cyan" variant="ghost" mt="5" width={"100%"} maxW={300} onClick={demoLogin} isLoading={demoLoading}>Try a Demo</Button>

      {currentRoute === 'signin' && <Link to="/signup"><Text mt={10}>Don't have an account? Sign up here.</Text></Link> }   

    </FormControl>
  )
}
