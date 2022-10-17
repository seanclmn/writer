import { useState } from 'react'
import { useGetUsers } from './hooks/useGetUsers'
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { Practice } from './components/Practice'

const App = () => {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>

      <Practice/>
    </QueryClientProvider>
  )
}


export default App