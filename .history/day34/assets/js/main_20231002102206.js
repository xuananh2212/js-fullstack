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
} from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
renderUi();
btnAddTodo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("is-show");
});

btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("is-show");
});
btnSave.addEventListener("click", function (e) {
  e.preventDefault();
  postTodos({ dess: inputTodos.value, status: false });
  inputTodos.value = "";
  modal.classList.remove("is-show");
});
