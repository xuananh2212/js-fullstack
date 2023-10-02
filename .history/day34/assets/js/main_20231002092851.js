import { todos, listTodos, listTodoCompleted, renderUi } from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
renderUi();
console.log(listTodoCompleted, listTodos);
