
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';

let email = prompt('Please enter your email:?', "example@example.com");
console.log(email);

const url = 'https://api-todo-ebon.vercel.app/api/v1/api-key?email=example%40example.com'
const { data } = client.get(url)
const { apiKey } = data.data;
console.log(apiKey)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
