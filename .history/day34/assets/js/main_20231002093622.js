import {
  todos,
  listTodos,
  listTodoCompleted,
  renderUi,
  btnAddTodo,
} from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
renderUi();

btnAddTodo.addEventListener("click", function (e) {});
