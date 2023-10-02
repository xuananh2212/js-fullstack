import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export const todos = $(".todos");
export let listTodos = null;
export let listTodoCompleted = null;
export let btnAddTodo = null;
export let modal = null;
export let btnSave = null;
export let btnCancel = null;
export let formTodos = null;
export let inputTodos = null;
export let valueTodoCompleted = 0;
export let spanValue = null;
export let btnCompleted = null;
export let inputSearch = null;
export const loadWrap = $(".load-wrap");
export function renderLi(desc, id, todos) {
  var html = `<li class="items-todo" data-id="${id}">
                    <div class="items-todo__inner">
                        <p class="desc">
                           ${desc}
                        </p>
                        <div class="row-feature">
                            <button class="btn-icon btn-remove"><i class="fa-regular fa-trash-can"></i></button>
                            <button class="btn-icon btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn-icon btn-check"><i class="fa-solid fa-check-to-slot"></i></button>
                        </div>
                    </div>
                </li>`;
  todos.insertAdjacentHTML("beforeend", html);
}

export async function renderTodos() {
  try {
    const todos = await getTodos();
    if (todos.length > 0) {
      todos.forEach((todos) => {
        if (!todos.status) {
          renderLi(todos.desc, todos.id, listTodos);
        } else {
          renderLi(todos.desc, todos.id, listTodoCompleted);
          valueTodoCompleted++;
        }
      });
      spanValue.innerHTML = valueTodoCompleted;
    }
  } catch (e) {
    console.log(e);
  }
}

export function renderUi() {
  var html = `<h2 class="heading-lv2"><span>Smatyx</span> Todos App</h2>
            <form autocomplete="off" class="form-search">
                <div class="form-group">
                    <input type="text" name="input-search" id="input-search">
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <button class="btn btn-add">Add Todos</button>
            </form>`;
  var ul = `
     <ul class="list-todos"></ul>
    `;
  var htmlBtnCompleted = `
     <button class="btn-completed">Completed Todos <span class="count">0</span>
                <div class="btn-cta__icon">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </button>
    `;
  var ulCompleted = `<ul class="list-todos completed"></ul>`;
  var htmlModal = `<div class="modal">
                <div class="modal-overlay"></div>
                <form autocomplete="off" class="form-todos">
                    <div class="form-group">
                        <input required type="text" name="input-text" id="input-text" placeholder="Add Todos">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-save">Save</button>
                        <button type="button" class="btn btn-cancel">Cancel</button>
                    </div>

                </form>
            </div>`;
  todos.insertAdjacentHTML("beforeend", html);
  todos.insertAdjacentHTML("beforeend", ul);
  todos.insertAdjacentHTML("beforeend", htmlBtnCompleted);
  todos.insertAdjacentHTML("beforeend", ulCompleted);
  todos.insertAdjacentHTML("beforeend", htmlModal);
  listTodos = $(".list-todos");
  listTodoCompleted = $(".list-todos.completed");
  btnAddTodo = $(".btn-add");
  modal = $(".modal");
  formTodos = $(".form-todos");
  btnSave = $(".btn-save");
  btnCancel = $(".btn-cancel");
  inputTodos = $(".form-todos input");
  spanValue = $(".btn-completed span");
  btnCompleted = $(".btn-completed");
  inputSearch = $("#input-search");
  renderTodos();
}
