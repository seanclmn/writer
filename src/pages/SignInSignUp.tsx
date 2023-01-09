import { MouseEvent, useEffect, useState } from "react"
import { Navigate,useLocation,Link } from "react-router-dom"
import { useStore } from "../store/store"

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
      mt={10}
      >

      { currentRoute === 'signup' && 
        <>
          <FormLabel>Username</FormLabel>

          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value } })=>(
              <Input 
                placeholder="Username" 
                value={value}
                mb="2"
                maxW={300}
                onChange={onChange}
              />
            )}
          />
          {/* <FormErrorMessage>{errors.message}</FormErrorMessage> */}
        </>
      }
      
      <FormLabel>Email</FormLabel>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } })=>(
          <Input 
            placeholder="Email" 
            value={value}
            mb="2"
            maxW={300}
            onChange={onChange}
          />
        )}
      />
      <FormErrorMessage>Email is required</FormErrorMessage>

      <FormLabel>Password</FormLabel>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } })=>(
          <Input 
            placeholder="Password" 
            value={value}
            mb="2"
            maxW={300}
            onChange={onChange}
          />
        )}
      />
      { currentRoute === 'signin' ? 
        <Button mt="5" width={"100%"} maxW={300} onClick={handleSubmit(logIn)} isLoading={loading}>Sign in</Button>:
        <Button mt="5" width={"100%"} maxW={300} onClick={handleSubmit(signUp)} isLoading={loading}>Sign up</Button>
      }

      {currentRoute === 'signin' && <Link to="/signup"><Text mt={10}>Don't have an account? Sign up here.</Text></Link> }   

    </FormControl>
  )
}
