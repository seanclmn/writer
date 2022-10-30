import { MouseEvent, useState } from "react"
import { useStore } from "../store/store"

export const SignInPage = () => {
  const [creds,setCreds]=useState({username: "", password: ""})
  const currentUsername = creds.username
  const currentPassword = creds.password

  const currentUser = useStore((state)=>state.currentUser)
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)



  const setUsername = (target: HTMLInputElement) =>  setCreds({username: target.value, password: currentPassword })
  const setPassword = (target: HTMLInputElement) =>  setCreds({username: currentUsername, password: target.value })
  const submitForm = (e: MouseEvent) => {
    e.preventDefault()
    // console.log(creds)
    setCurrentUser(creds)
  }

  console.log(currentUser)


  return(
    <form 
      action=""
      style={{'display':'flex', 'flexDirection': 'column', 'alignItems': 'center'}}
      >
      <label htmlFor="">username</label>
      <input type="text" id="username" onChange={(e)=>setUsername(e.target)}/>
      <label htmlFor="">password</label>
      <input type="text" id="password" onChange={(e)=>setPassword(e.target)}/>

      <button onClick={(e)=>submitForm(e)}>submit</button>
    </form>
  )
}