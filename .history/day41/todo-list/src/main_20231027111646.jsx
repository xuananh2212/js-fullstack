
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';

let email = prompt('Please enter your email:?', "example@example.com");
email = email.replace(/@/g, "%40");
console.log(email);
const url = `/api-key?email=${email}`;
const response = client.get(url).then(({ data }) => {
  console.log(data);
  const { apiKey } = data.data;
  console.log(apiKey)
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
