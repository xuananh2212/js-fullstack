import { useState } from 'react'
import routes from './Routers/router.js'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {
            routes.map((Route, index) => {

            })
          }
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
