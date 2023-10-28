
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { client } from './Utils/client.jsx';
import { ToastTode } from './Components/ToastTodo.jsx';

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
    } else {
      ToastTode._this.handleUpdateToast("Email không Tồn Tại", false);
    }
  }
}
function getApiKeyCookie() {
  const apiKey = document.cookie.replace(/apiKey=/, "");
  return apiKey;
}
async function getAddTodo(todo) {
  const apiKey = getApiKeyCookie();
  const { data } = await client.post("/todos", { todo }, apiKey);
  console.log(data);
}

function handleAddTodo(e) {
  e.preventDefault();
  const newTodo = document.querySelector("#text-new-todo").value;
  if (/.{2,}/.test(newTodo)) {
    getAddTodo(newTodo);
  }

}

async function getList(apiKey) {
  const { data } = await client.get("/todos", null, apiKey);
  console.log(data);
  if (data.code === 200) {
    const { listTodo } = data.data;
  } else {
    getApiKey();
  }
}

export function callApi() {
  if (document.cookie) {
    const apiKey = getApiKeyCookie();
    getList(apiKey);

  } else {
    getApiKey();
  }

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App handleAddTodo={handleAddTodo} handleToast={handleToast} />
  </>
)