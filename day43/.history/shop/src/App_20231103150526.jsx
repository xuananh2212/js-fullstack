import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import Orders from './Components/Orders/Orders'
import Loading from './Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { handleGetProducts, handleCheckApi } from './Utils/handleApi.js';

export const AppContext = React.createContext();
function App() {
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  // toi uu lai sau.
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleCheckApi(setOrders);
    handleGetProducts({ limit: 8 }).then(data => {
      setProducts(data);
    })
  }, [])
  return (
    <AppContext.Provider
      value=
      {
        {
          isLoading,
          orders,
          products,
          setLoading,
          setOrders
        }
      }
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
