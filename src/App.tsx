import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {PrivateRoute} from '../src/routing/Privateroute'
import { SignInSignUpPage } from './pages/SignInSignUp'
import { auth } from './Firebase'
import { useEffect, useState } from 'react'
import { useStore } from './store/store'
import { SignoutButton } from './components/SignoutButton'
import { EditorPage } from './pages/EditorPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  const currentUser = useStore((state)=>state.currentUser)
  const loggedIn = useStore((state)=>state.loggedIn)
  const loading = loggedIn === null
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)
  const setLoggedIn: any = useStore((state)=>state.setLoggedIn)

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user===null){
        setCurrentUser({email: "", id: ""})
        setLoggedIn(false)
      }else if(!!user) {
        setCurrentUser({email:user.email,id:user.uid})
        setLoggedIn(true)
      }
    })
  },[])

  if(loading) {
    return(<div>loading...</div>)
  }
  
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignInSignUpPage/>}/>
            <Route path="/signup" element={<SignInSignUpPage/>}/>
            <Route path="/" element={<PrivateRoute><SignoutButton/></PrivateRoute> }>
              <Route path="editor" element={<EditorPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App