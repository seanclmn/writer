import { FirebaseError } from "firebase/app"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../Firebase"
import { useStore } from "../store/store"
import { Credentials } from "../types/AuthTypes"

export const SignInSignUpPage = () => {
  const [creds,setCreds]=useState({email: "", password: ""})
  const currentEmail = creds.email
  const currentPassword = creds.password
  const setEmail = (target: HTMLInputElement) => setCreds({email: target.value, password: currentPassword })
  const setPassword = (target: HTMLInputElement) => setCreds({email: currentEmail, password: target.value })

  const onSignInPage = window.location.href.includes('signin')
  const onSignUpPage = window.location.href.includes('signup')

  const currentUser = useStore((state)=>state.currentUser)
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)

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

  return(
    <>
      <form 
        action=""
        style={{'display':'flex', 'flexDirection': 'column', 'alignItems': 'center'}}
        >
        <label htmlFor="">email</label>
        <input type="text" id="email" onChange={(e)=>setEmail(e.target)}/>
        <label htmlFor="">password</label>
        <input type="text" id="password" onChange={(e)=>setPassword(e.target)}/>
  
        {onSignInPage && <button onClick={(e)=>signInUser(e)}>Sign in</button>}
        {onSignUpPage && <button onClick={(e)=>signUpUser(e)}>Sign up</button>}
      </form>
  
      <Link to="/"><button>link</button></Link>
    </>
  )
}