import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'

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