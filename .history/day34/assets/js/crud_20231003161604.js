var apiUrl = "https://ncr72g-8080.csb.app/todos";
const loading = document.querySelector(".load-wrap");
function isLoading() {
  loading.classList.add("is-loading");
}

export const getTodos = async () => {
  try {
    isLoading();
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const postTodos = async (data) => {
  try {
    isLoading();
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataNow = await response.json();
    return dataNow;
  } catch (e) {
    console.log(e.message);
  }
};

export const patchTodos = async (id, desc, status) => {
  try {
    isLoading();
    const response = await fetch(apiUrl + "/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ desc, status }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteTodos = async (id) => {
  try {
    isLoading();
    const response = await fetch(apiUrl + "/" + id, {
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
