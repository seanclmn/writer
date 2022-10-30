import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import {PrivateRoute} from '../src/routing/Privateroute'
import { Practice } from './components/Practice'
import { SignInSignUpPage } from './pages/SignInSignUp'
import { auth } from './Firebase'
import { useEffect, useState } from 'react'
import { useStore } from './store/store'

const App = () => {

  const queryClient = new QueryClient()
  const [loading,setLoading]=useState(true)
  const currentUser = useStore((state)=>state.currentUser)
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user===null){
        setCurrentUser({email: "", password: ""})
      }else if(!!user) {
        setCurrentUser({email:user.email,id:user.uid})
        setLoading(false)
        console.log(user)
      }
    })
    console.log(currentUser)
  },[])

  if(loading) {
    return(<div></div>)
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInSignUpPage/>}/>
          <Route path="/signup" element={<SignInSignUpPage/>}/>
          <Route path="/" element={<PrivateRoute><p>stuff</p></PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App