import React, { useState } from 'react'
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import Loading from './Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
export const AppContext = React.createContext();
function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="container">
      <Products />
      <Orders />
      <ToastContainer />
      <Loading />
    </div>
  )
}

export default App
