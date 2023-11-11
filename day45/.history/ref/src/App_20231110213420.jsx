import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
function App() {
  return (
    <>
      <Theme />
      <ToastContainer />
    </>
  )
}

export default App
