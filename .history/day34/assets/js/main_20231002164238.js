import {
  todos,
  listTodos,
  listTodoCompleted,
  renderUi,
  btnAddTodo,
  modal,
  btnCancel,
  btnSave,
  inputTodos,
  formTodos,
  renderLi,
  valueTodoCompleted,
  spanValue,
  btnCompleted,
  inputSearch,
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
  var id = Number(todos.length) + 1;
  console.log(id);
  renderLi(desc, id, listTodos);
}

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isAddNew) {
    postTodos({ desc: inputTodos.value, status: false });
    getId(inputTodos.value, listTodos);
  } else {
    if (li.parentElement === listTodos) {
      patchTodos(id, inputTodos.value, false);
    } else if (li.parentElement === listTodoCompleted) {
      patchTodos(id, inputTodos.value, true);
    }
    desc.innerText = inputTodos.value;
  }
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

btnCancel.addEventListener("click", function (e) {
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

function handle(e) {
  li = e.target.parentElement.parentElement.parentElement;
  desc = li.querySelector(".desc");
  id = li.dataset.id;
  if (e.target.matches(".btn-remove")) {
    li.remove();
    deleteTodos(id);
    if (li.parentElement === listTodoCompleted) {
      var value = Number(spanValue.innerText);
      spanValue.innerHTML = --value;
    }
  } else if (e.target.matches(".btn-edit")) {
    modal.classList.add("is-show");
    inputTodos.value = desc.innerText;
    isAddNew = false;
  } else if (e.target.matches(".btn-check")) {
    var value = Number(spanValue.innerHTML);
    if (li.parentElement === listTodos) {
      console.log(id);
      patchTodos(id, desc.innerText, true)
        .then((response) => {
          if (response.ok) {
            console.log("update thanh cong");
            renderLi(desc.innerText, id, listTodoCompleted);
            spanValue.innerHTML = ++value;
            li.remove();
          }
        })
        .catch((err) => {
          console.log("vui lòng nhấn chậm");
        });
    } else if (li.parentElement === listTodoCompleted) {
      patchTodos(id, desc.innerText, false)
        .then((response) => {
          if (response.ok) {
            console.log("update thanh cong");
            renderLi(desc.innerText, id, listTodos);
            spanValue.innerHTML = --value;
            li.remove();
          }
        })
        .catch((err) => {
          console.log("vui lòng nhấn chậm");
        });
    }
  }
}

listTodos.addEventListener("click", function (e) {
  handle(e);
});

listTodoCompleted.addEventListener("click", function (e) {
  handle(e);
});

btnCompleted.addEventListener("click", function (e) {
  btnCompleted.classList.toggle("is-active");
});

function handleAllDesc() {
  var descAll = null;
  if (listTodos.children.length > 0) {
    var descTodos = listTodos.querySelectorAll(".desc");
    descAll = [...descTodos];
  }

  var descTodoCompleted = null;
  if (btnCompleted.matches(".is-active")) {
    descTodoCompleted = listTodoCompleted.querySelectorAll(".desc");
    console.log(descTodoCompleted);
  }
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
  console.log(descAll);
  var value = this.value;
  if (this.value) {
    if (descAll) {
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
