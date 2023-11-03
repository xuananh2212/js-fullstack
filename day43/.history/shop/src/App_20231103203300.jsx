import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import Carts from './Components/Carts/Carts.jsx'
import Loading from './Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { handleGetProducts, handleCheckApi } from './Utils/handleApi.js';

export const AppContext = React.createContext();
function App() {
  const [isLoading, setLoading] = useState(false);
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem('carts')) || []);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleCheckApi(setCarts, setLoading);
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
          carts,
          setCarts,
          products,
          setLoading,

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
