import Rotas from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <div className='container-fluid'>
      <Rotas />
      <ToastContainer
      autoClose={5000}
      theme="colored"
      />
    </div>
  )
}
