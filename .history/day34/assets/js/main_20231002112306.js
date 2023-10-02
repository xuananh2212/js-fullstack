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
  }
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

btnCancel.addEventListener("click", function (e) {
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

listTodos.addEventListener("click", function (e) {
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
  }
});
