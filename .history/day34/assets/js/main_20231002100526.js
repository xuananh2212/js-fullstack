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

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  if (e.target.matches(".btn-save")) {
    postTodos({ dess: inputTodos.value, status: false });
    inputTodos.value = "";
    console.log("vao");
  }
  modal.classList.remove("is-show");
});
