import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/reset.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { ToastContainer, toast } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider
    store={store}>
    <App />
    <ToastContainer />
  </Provider>
  // </React.StrictMode>,
)

