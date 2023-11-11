import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
function App() {
  return (
    <div className='container'>
      <Theme />
      <Content />
      <ToastContainer />
    </div>

  )
}

export default App
