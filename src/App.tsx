import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, Outlet} from 'react-router-dom'
import { PrivateRoute } from '../src/routing/Privateroute'
import { SignInSignUpPage } from './pages/SignInSignUp'
import { auth, db } from './Firebase'
import { useEffect } from 'react'
import { useStore } from './store/store'
import { EditorPage } from './pages/EditorPage'
import { MyBlogs } from './pages/Blogs'
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { AppContainer } from './pages/AppContainer'
import { Blogpost } from './pages/Blogpost'
import { doc, getDoc } from 'firebase/firestore'
import { User } from './types/AuthTypes'
import { Profile } from './pages/Profile'

const App = () => {
  const queryClient = new QueryClient()
  const loggedIn = useStore((state)=>state.loggedIn)
  const loading = loggedIn === null
	const setCurrentUser: any= useStore((state)=>state.setCurrentUser)
  const setLoggedIn: any = useStore((state)=>state.setLoggedIn)

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user===null){
        setCurrentUser({email: "", id: ""})
        setLoggedIn(false)
      }else if(!!user) {
        try{
          const res = (await getDoc(doc(db,"users",user.uid))).data()
          setCurrentUser({email:user.email,id:user.uid,username:res?.username})
          setLoggedIn(true)
        }
        catch(err){
          console.log(err)
        }
      }
    })
  },[])

  if(loading) {
    return(<p>loading...</p>)
  }

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignInSignUpPage/>}/>
            <Route path="/signup" element={<SignInSignUpPage/>}/>
            <Route path="/" element={<AppContainer/> }>
              <Route path="/editor/:editblogid" element={<PrivateRoute><EditorPage/></PrivateRoute>}/>
              <Route path="u/:userid" element={<MyBlogs/>}/>
              <Route path="b/:blogpostid" element={<Blogpost/>}/>
              <Route path="p/:userid" element={<Profile/>} />
						</Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
