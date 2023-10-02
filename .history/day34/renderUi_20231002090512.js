import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export const todos = $(".todos");
export const listTodos = $(".listTodos");

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
  var btnCompleted = `
     <button class="btn-completed">Completed Todos <span class="count">2</span>
                <div class="btn-cta__icon">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </button>
    `;
  var ulCompleted = `<ul class="list-todos completed"></ul>`;
  var modal = `<div class="modal">
                <div class="modal-overlay"></div>
                <form class="form-todos">
                    <div class="form-group">
                        <input type="text" name="input-text" id="input-text" placeholder="Add Todos">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-save">Save</button>
                        <button class="btn btn-cancel">Cancel</button>
                    </div>

                </form>
            </div>`;
  todos.insertAdjacentHTML("beforeend", html);
  todos.insertAdjacentHTML("beforeend", ul);
  todos.insertAdjacentHTML("beforeend", btnCompleted);
  todos.insertAdjacentHTML("beforeend", ulCompleted);
  todos.insertAdjacentHTML("beforeend", modal);
}
