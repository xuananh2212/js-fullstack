var apiUrl = "https://ncr72g-8080.csb.app/todos";

const getTodos = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
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

const data = getTodos();
console.log(data);
