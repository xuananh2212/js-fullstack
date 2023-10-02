import {
  todos,
  listTodos,
  listTodoCompleted,
  renderUi,
  btnAddTodo,
  modal,
} from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
renderUi();
console.log(btnAddTodo);
btnAddTodo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("is-show");
});
