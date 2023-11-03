import { useState } from 'react'
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
import { ToastContainer, toast } from 'react-toastify';
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
