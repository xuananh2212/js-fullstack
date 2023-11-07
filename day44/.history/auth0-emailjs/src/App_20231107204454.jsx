import { useState } from 'react'

import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import './App.css'
import Profile from './Components/Profile/Profile'


function App() {

  return (

    <div>
      <Login />
      <Profile />
      <Logout />
    </div>


  )
}

export default App
