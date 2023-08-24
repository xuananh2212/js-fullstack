const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
console.log(todoList);

function insertTodo(form) {
  var valueInput = form.querySelector(".todo-input").value;
  console.log(valueInput);
  var html = `<div class="todo">
                <p>${valueInput}</p>
                <div class="icon-row">
                    <i class="fa-solid fa-pen-to-square edit-todo"></i>
                    <i class="fa-solid fa-trash remove-todo"></i>
                </div>
            </div>`;
  todoList.insertAdjacentHTML("beforeend", html);
  this.querySelector(".todo-input").value = "";
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var valueInput = this.querySelector(".todo-input").value;
  console.log(valueInput);
  if (valueInput) {
    var html = `<div class="todo">
                <p>${valueInput}</p>
                <div class="icon-row">
                    <i class="fa-solid fa-pen-to-square edit-todo"></i>
                    <i class="fa-solid fa-trash remove-todo"></i>
                </div>
            </div>`;
    todoList.insertAdjacentHTML("beforeend", html);
    this.querySelector(".todo-input").value = "";
  }
});

todoList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches(".edit-todo")) {
    var desc = e.target.parentElement.previousElementSibling.textContent;
    console.log(desc);
    var html = `
         <form action="" class="todo-form">
            <div class="form-group">
                <input type="text" class="todo-input" name="todo-input" id="todo-input"
                    placeholder="Update task" value = ${desc}>
                <button type="submit" class="btn">Add Task</button>
            </div>
        </form>
        `;
    var todoNode = e.target.parentElement.parentElement;
    todoNode.insertAdjacentHTML("beforebegin", html);
    todoNode.parentElement.removeChild(todoNode);
  } else if (e.target.matches(".remove-todo")) {
    var todoNode = e.target.parentElement.parentElement;
    todoNode.parentElement.removeChild(todoNode);
  } else if (e.target.matches(".btn")) {
    var form = e.target.parentElement.parentElement;
    var valueInput = form.querySelector(".todo-input").value;
    console.log(desc);
    var html = `
         <div class="todo">
                <p>${valueInput}</p>
                <div class="icon-row">
                    <i class="fa-solid fa-pen-to-square edit-todo"></i>
                    <i class="fa-solid fa-trash remove-todo"></i>
                </div>
            </div>
        `;
    form.insertAdjacentHTML("beforebegin", html);
    form.parentElement.removeChild(form);
  }
});
