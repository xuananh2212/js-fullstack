
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import Loading from './Components/Loading/Loading';
import { useAuth0 } from '@auth0/auth0-react'


function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div>
      {error && toast.error("ApthenTication Error")}
      {!error && !isLoading &&
        <><Login />
          <Logout /></>}
      <ToastContainer />
      <Loading loading={isLoading} />
    </div>


  )
}

export default App
