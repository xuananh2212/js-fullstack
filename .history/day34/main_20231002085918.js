import { todos, listTodos, renderUi } from "./renderUi";

var apiUrl = "https://ncr72g-8080.csb.app/todos";

const getTodos = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
};

const postTodos = async (data) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const patchTodos = async (id, desc, status) => {
  const response = await fetch(apiUrl + "/" + id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ desc, status }),
  });
};

const deleteTodos = async (id) => {
  const response = await fetch(apiUrl + "/" + id, {
    method: "DELETE",
  });
};

renderUi();
