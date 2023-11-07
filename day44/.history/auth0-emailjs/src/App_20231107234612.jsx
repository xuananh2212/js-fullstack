import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'


import { useAuth0 } from '@auth0/auth0-react'


function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div>
      {error && <p>ApthenTication Error</p>}
      {!error && isLoading && }
      {!error && !isLoading &&
        <><Login />
          <Logout /></>}

    </div>


  )
}

export default App
