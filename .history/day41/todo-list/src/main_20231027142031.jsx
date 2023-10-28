
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';

async function getApiKey() {
  let email = prompt('Please enter your email:?', "example@example.com");
  email = email.replace(/@/g, "%40");
  console.log(email);
  const url = `/api-key?email=${email}`;
  const { data } = await client.get(url);
  console.log(data);


}
getApiKey();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
