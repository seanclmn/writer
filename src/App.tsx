import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import {PrivateRoute} from '../src/routing/Privateroute'
import { Practice } from './components/Practice'

const App = () => {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>stuff</p>}/>
          <Route path="/private" element={<PrivateRoute><p>stuff</p></PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App