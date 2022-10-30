import { Route, Routes } from "react-router-dom"
import { useGetUsers } from "../hooks/data/useGetUsers"
import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser"
import {PrivateRoute} from "../routing/Privateroute"
import { useStore, initUser, User, AppState} from "../store/store"
import { useEffect } from "react"
import { SignInPage } from "../pages/SignInPage"

export const Practice = () => {
  // const {isLoading,error,data:users}=useGetUsers()
	const currentUser = useStore((state)=>state.currentUser)
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)
	// setCurrentUser()

	const exampleUser = {
		username: "sean",
		id: "123456789"
	}

	console.log(currentUser)

	return(
		<>
			{/* <p>{currentUser?.username}</p>
			<button onClick={()=>setCurrentUser(exampleUser)}>newuser</button> */}
			<SignInPage/>
		</>
  )
}
