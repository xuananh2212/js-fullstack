
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';
import ToastTodo from './Components/ToastTodo.jsx'

async function getApiKey() {
  let email = prompt('Please enter your email:?', "example@example.com");
  email = email.replace(/@/g, "%40");
  console.log(email);
  const url = `/api-key?email=${email}`;
  const { response, data } = await client.get(url);
  console.log(data);
  if (data.code === 200) {
    const { apiKey } = data.data;
    console.log(response);
    document.cookie = `apiKey=${apiKey}`;
  } else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <App />
        <ToastTodo message="Email không Tồn Tại" status={false} />
      </>
    )

  }
}
if (localStorage.getItem("apiKey")) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />)
} else {
  getApiKey();
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
}


