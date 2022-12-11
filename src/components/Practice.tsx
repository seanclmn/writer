import { useStore } from "../store/store"
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
