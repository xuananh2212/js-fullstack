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
    </div>
  )
}

export default App
