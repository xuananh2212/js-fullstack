
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';
import ToastTodo from './Components/ToastTodo.jsx'

async function getApiKey() {
  let email = prompt('Please enter your email:?', "example@example.com");
  if (email) {
    email = email.replace(/@/g, "%40");
    const url = `/api-key?email=${email}`;
    const { data } = await client.get(url);
    console.log(data);
    if (data.code === 200) {
      const { apiKey } = data.data;
      document.cookie = `apiKey=${apiKey}`;
      ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
      )
    } else {
      ReactDOM.createRoot(document.getElementById('root')).render(
        <>
          <App />
          <ToastTodo message="Email không Tồn Tại" status={false} />
        </>
      )
    }
  } else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App />
    )
  }
}
async function getAddTodo() {
  const { data } = await client.get("/todos", null, apiKey);
  console.log(data);
  if (data.code === 200) {
    const { listTodo } = data.data;
    console.log(listTodo, 1)
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App listTodo={listTodo} handleAddTodo={handleAddTodo} />)
  } else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <App />
        <ToastTodo message="Email không Tồn Tại" status={false} />
      </>
    )
    getApiKey();
  }
}

function handleAddTodo(e) {
  e.preventDefault();
  const newTodo = document.querySelector("#text-new-todo").value;
  console.log(newTodo, 1111);

}

async function getList(apiKey) {
  const { data } = await client.get("/todos", null, apiKey);
  console.log(data);
  if (data.code === 200) {
    const { listTodo } = data.data;
    console.log(listTodo, 1)
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App listTodo={listTodo} handleAddTodo={handleAddTodo} />)
  } else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <App />
        <ToastTodo message="Email không Tồn Tại" status={false} />
      </>
    )
    getApiKey();
  }
}
if (document.cookie) {
  const apiKey = document.cookie.replace(/apiKey=/, "");
  getList(apiKey);

} else {
  getApiKey();
}


