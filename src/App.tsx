import './index.scss'
import { AppProvider } from './providers/AppProvider'
import AppRouter from './Router/routes'

function App() {

  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
