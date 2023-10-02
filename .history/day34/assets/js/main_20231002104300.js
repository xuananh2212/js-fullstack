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
renderUi();
btnAddTodo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("is-show");
});

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  postTodos({ desc: inputTodos.value, status: false });
  inputTodos.value = "";
  renderLi(inputTodos.value, id);
});

btnCancel.addEventListener("click", function (e) {
  modal.classList.remove("is-show");
});
