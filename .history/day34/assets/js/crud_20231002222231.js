var apiUrl = "https://ncr72g-8080.csb.app/todos";

export const getTodos = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const postTodos = async (data) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const patchTodos = async (id, desc, status) => {
  const loading = document.querySelector(".load-wrap");
  loading.classList.add("is-loading");
  const response = await fetch(apiUrl + "/" + id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ desc, status }),
  });
  const data = await response.json();
  return data;
};

export const deleteTodos = async (id) => {
  const response = await fetch(apiUrl + "/" + id, {
    method: "DELETE",
  });
};
