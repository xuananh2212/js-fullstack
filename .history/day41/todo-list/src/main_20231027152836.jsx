
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';

async function getApiKey() {
  let email = prompt('Please enter your email:?', "example@example.com");
  email = email.replace(/@/g, "%40");
  console.log(email);
  const url = `/api-key?email=${email}`;
  const { response, data } = await client.get(url);

  if (data.code === 200) {
    const { apiKey } = data.data;
    console.log(response);
    console.log(data);
    localStorage.setItem('apiKey', apiKey)
  } else {
    console.log("1");
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <App />
        <ToastTodo message="Email không Tồn Tại" status={false} />
      </>
    )

  }
}
getApiKey();
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)


