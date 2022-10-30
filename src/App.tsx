import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import {PrivateRoute} from '../src/routing/Privateroute'
import { Practice } from './components/Practice'
import { SignInPage } from './pages/SignInPage'

const App = () => {

  const queryClient = new QueryClient()

  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/" element={<PrivateRoute><p>stuff</p></PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App