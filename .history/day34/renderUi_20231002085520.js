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
  todos.insertAdjacentHTML("beforeend", html);
  var ul = `
     <ul class="list-todos">   </ul>

    `;
}
