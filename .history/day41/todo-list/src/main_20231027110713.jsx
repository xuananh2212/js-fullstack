
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';

let email = prompt('Please enter your email:?', "example@example.com");
console.log(email);
email = email.replace(/@/g, "%40")
const url = `/api-key?email=${email}`;
const { data } = client.get(url);
console.log(data)
const { apiKey } = data.data;
console.log(apiKey)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
