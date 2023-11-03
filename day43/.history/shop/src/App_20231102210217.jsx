import { useState } from 'react'
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";
function App() {
  return (
    <div className="container">
      <Products />
      <Orders />
      <ToastContainer />
      <HashLoader
        size={100}
        color="#36d7b7"
        loading
      />
    </div>
  )
}

export default App
