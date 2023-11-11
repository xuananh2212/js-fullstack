import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
function App() {
  return (
    <div className='container'>
      <Theme />
      <h2 className='heading-lv2'>Chào mừng bạn đến với trò chơi đoán số!</h2>
      <ToastContainer />
    </div>

  )
}

export default App
