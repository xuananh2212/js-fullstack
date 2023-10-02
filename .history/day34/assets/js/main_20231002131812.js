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
console.log(btnCompleted);
btnCompleted.addEventListener("click", function (e) {
  btnCompleted.classList.toggle("is-active");
});
