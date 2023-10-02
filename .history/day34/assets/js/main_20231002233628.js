import {
  listTodos,
  listTodoCompleted,
  renderUi,
  btnAddTodo,
  modal,
  btnCancel,
  inputTodos,
  formTodos,
  renderLi,
  spanValue,
  btnCompleted,
  inputSearch,
  loadWrap,
} from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
let li = null;
let desc = null;
let id = null;
renderUi();
var isAddNew = false;
btnAddTodo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("is-show");
  isAddNew = true;
});

async function getId(desc, listTodos) {
  const todos = await getTodos();
  loadWrap.classList.remove("is-loading");
  var idNew = 0;
  if (todos.length > 0) {
    idNew = todos[0].id;
    console.log(idNew, "bd");
    todos.forEach((todo) => {
      if (todo.id > idNew) {
        console.log(todo.id, "todo.id");
        idNew = todo.id;
      }
    });
  }
  renderLi(desc, idNew, listTodos);
  inputTodos.value = "";
}

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isAddNew) {
    postTodos({ desc: inputTodos.value, status: false }).then(function () {
      loadWrap.classList.remove("is-loading");
      getId(inputTodos.value, listTodos);
    });
  } else {
    if (li.parentElement === listTodos) {
      patchTodos(id, inputTodos.value, false).then(function () {
        loadWrap.classList.remove("is-loading");
        inputTodos.value = "";
      });
    } else if (li.parentElement === listTodoCompleted) {
      patchTodos(id, inputTodos.value, true).then(function () {
        loadWrap.classList.remove("is-loading");
        inputTodos.value = "";
      });
    }
    desc.innerText = inputTodos.value;
  }

  modal.classList.remove("is-show");
});

btnCancel.addEventListener("click", function (e) {
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

function handleData(e) {
  li = e.target.parentElement.parentElement.parentElement;
  desc = li.querySelector(".desc");
  id = li.dataset.id;
  if (e.target.matches(".btn-remove")) {
    if (li.parentElement === listTodoCompleted) {
      var value = Number(spanValue.innerText);
      spanValue.innerHTML = --value;
    }
    deleteTodos(id).then(function () {
      li.remove();
      console.log(loadWrap);
      loadWrap.classList.remove("is-loading");
    });
  } else if (e.target.matches(".btn-edit")) {
    modal.classList.add("is-show");
    inputTodos.value = desc.innerText;
    isAddNew = false;
  } else if (e.target.matches(".btn-check")) {
    var value = Number(spanValue.innerHTML);
    if (li.parentElement === listTodos) {
      patchTodos(id, desc.innerText, true)
        .then((data) => {
          loadWrap.classList.remove("is-loading");
          renderLi(data.desc, data.id, listTodoCompleted);
          spanValue.innerHTML = ++value;
          li.remove();
          console.log("update thanh cong");
        })
        .catch((err) => {
          console.log("error");
        });
    } else if (li.parentElement === listTodoCompleted) {
      patchTodos(id, desc.innerText, false)
        .then((data) => {
          loadWrap.classList.remove("is-loading");
          console.log("update thanh cong");
          renderLi(data.desc, data.id, listTodos);
          spanValue.innerHTML = --value;
          li.remove();
        })
        .catch((err) => {
          console.log("error");
        });
    }
  }
}

listTodos.addEventListener("click", function (e) {
  handleData(e);
});

listTodoCompleted.addEventListener("click", function (e) {
  handleData(e);
});

btnCompleted.addEventListener("click", function (e) {
  btnCompleted.classList.toggle("is-active");
});

function handleAllDesc() {
  var descAll = [];
  if (listTodos.children.length > 0) {
    var descTodos = listTodos.querySelectorAll(".desc");
    descAll = [...descTodos];
  }

  var descTodoCompleted = listTodoCompleted.querySelectorAll(".desc");
  if (descTodoCompleted) {
    if (descAll) {
      descAll = [...descAll, ...descTodoCompleted];
    } else {
      descAll = [...descTodoCompleted];
    }
  }
  return descAll;
}

inputSearch.addEventListener("input", function (e) {
  var descAll = handleAllDesc();
  var value = this.value;
  if (this.value) {
    if (descAll.length > 0) {
      descAll.forEach((desc) => {
        var content = desc.innerText.trim();
        if (content.includes(value)) {
          desc.parentElement.parentElement.classList.remove("is-hidden");
          var index = content.indexOf(value);
          var html = content.slice(0, index);
          html += `<span>${value}</span>`;
          html += content.slice(index + value.length);
          desc.innerHTML = html;
        } else {
          desc.parentElement.parentElement.classList.add("is-hidden");
        }
      });
    }
  } else {
    if (descAll) {
      descAll.forEach((desc) => {
        var html = desc.innerText;
        desc.innerText = html;
        desc.parentElement.parentElement.classList.remove("is-hidden");
      });
    }
  }
});
