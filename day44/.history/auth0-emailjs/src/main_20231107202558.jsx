import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
const domain = process.env.MY_APP_AUTH0_DOMAIN;
const domain = process.env.MY_APP_AUTH0_DOMAIN;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
