import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {PrivateRoute} from '../src/routing/Privateroute'
import { SignInSignUpPage } from './pages/SignInSignUp'
import { auth } from './Firebase'
import { useEffect } from 'react'
import { useStore } from './store/store'
import { EditorPage } from './pages/EditorPage'
import { MyBlogs } from './pages/MyBlogs'
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { AppContainer } from './pages/AppContainer'

const App = () => {
  const queryClient = new QueryClient()
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
    return(<p>loading...</p>)
  }
  
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignInSignUpPage/>}/>
            <Route path="/signup" element={<SignInSignUpPage/>}/>
            <Route path="/" element={<PrivateRoute><AppContainer/></PrivateRoute> }>
              <Route path="/editor" element={<EditorPage/>}/>
              <Route path="/myblogs" element={<MyBlogs/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
