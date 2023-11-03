import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import Loading from './Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { client } from './Utils/client.js'
export const AppContext = React.createContext();
function App() {
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  let products = [];

  useEffect(() => {


  }, [])
  return (
    <AppContext.Provider
      value={{
        isLoading,
        orders
      }}
    >
      <div className="container">
        <Products />
        <Orders />
        <ToastContainer />
        <Loading />
      </div>
    </AppContext.Provider>
  )
}

export default App
