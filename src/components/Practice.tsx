import { Route, Routes } from "react-router-dom"
import { useGetUsers } from "../hooks/get/ReadUserDataHooks"
import { useGetCurrentUser } from "../hooks/auth/AuthHooks"
import {PrivateRoute} from "../routing/Privateroute"
import { useStore, initUser, AppState} from "../store/store"
import {User} from '../types/AuthTypes'
import { useEffect } from "react"
import { SignInSignUpPage } from "../pages/SignInSignUp"

export const Practice = () => {
  // const {isLoading,error,data:users}=useGetUsers()
	const currentUser = useStore((state)=>state.currentUser)
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)
	// setCurrentUser()

	const exampleUser = {
		email: "sean",
		id: "123456789"
	}

	console.log(currentUser)

	return(
		<>
			{/* <p>{currentUser?.email}</p>
			<button onClick={()=>setCurrentUser(exampleUser)}>newuser</button> */}
			<SignInSignUpPage/>
		</>
  )
}
