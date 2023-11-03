import { useState } from 'react'
import Products from './Components/Products/Products'
import Orders from './Components/Orders/Orders'
function App() {
  return (
    <>
      <div className="container">
        <Products />
        <Orders />

      </div>
    </>
  )
}

export default App
