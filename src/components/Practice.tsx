import { useGetUsers } from "../hooks/useGetUsers"

export const Practice = () => {
  const {isLoading,error,data:users}=useGetUsers()
	return(
  	<div className="App">
			<p>
				text
			</p>
			{!isLoading && !error && users?.map((data)=>JSON.stringify(data))}
  	</div>
  )
}
