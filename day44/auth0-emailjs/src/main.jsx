import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
const domain = "dev-cm7027b2xmgp6eor.us.auth0.com";
const clientId = "vPVeXPrW8NJm9Oag8OBw03kYQEzPDbd7";
console.log(clientId);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
