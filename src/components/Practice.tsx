import { Route, Routes } from "react-router-dom"
import { useGetUsers } from "../hooks/data/useGetUsers"
import PrivateRoute from "../routing/Privateroute"
import { useStore, initUser } from "../store/store"

export const Practice = () => {
  const {isLoading,error,data:users}=useGetUsers()
	const currentUser = useStore((state)=>state.currentUser)
	return(
		<Routes>
			<Route path="/" element={<p>home</p>}/>
			
		</Routes>
  	// <div className="App">
		// 	{currentUser.id.length > 0 && <p>currentuser</p>}
		// 	<p>
		// 		text
		// 	</p>


		// 	{!isLoading && !error && users?.map((data)=>JSON.stringify(data))}
  	// </div>
  )
}
