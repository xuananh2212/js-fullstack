
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let email = prompt('Please enter your email:?', "example@example.com");
console.log(email);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
