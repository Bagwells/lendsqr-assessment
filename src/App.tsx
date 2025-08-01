
import { Flip, ToastContainer } from 'react-toastify'
import './index.scss'
import { AppProvider } from './providers/AppProvider'
import AppRouter from './Router/routes'

function App() {

  return (
    <AppProvider>
      <ToastContainer position='top-right' closeOnClick theme='colored'
          pauseOnHover newestOnTop autoClose={3000} transition={Flip}
        />
      <AppRouter/>
    </AppProvider>
  )
}

export default App
