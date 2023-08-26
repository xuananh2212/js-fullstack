const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
console.log(todoList);

function returnHtml(valueInput) {
  return `<div class="todo">
                <p>${valueInput}</p>
                <div class="icon-row">
                    <i class="fa-solid fa-pen-to-square edit-todo"></i>
                    <i class="fa-solid fa-trash remove-todo"></i>
                </div>
            </div>`;
}

function removeTodo(nodeCurrent) {
  var todoNode = nodeCurrent.parentElement.parentElement;
  todoNode.parentElement.removeChild(todoNode);
}

function editTodo(nodeCurrent) {
  var desc = nodeCurrent.parentElement.previousElementSibling.textContent;
  var html = `
         <form action="" class="todo-form">
            <div class="form-group">
                <input type="text" class="todo-input" name="todo-input" id="todo-input"
                    placeholder="Update task">
                <button type="submit" class="btn">Add Task</button>
            </div>
        </form>
        `;
  var todoNode = nodeCurrent.parentElement.parentElement;
  todoNode.insertAdjacentHTML("beforebegin", html);
  todoNode.previousElementSibling.querySelector(".todo-input").value = desc;
  todoNode.parentElement.removeChild(todoNode);
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var valueInput = this.querySelector(".todo-input").value.trim();
  if (valueInput !== "") {
    var html = returnHtml(valueInput);
    todoList.insertAdjacentHTML("beforeend", html);
  }
  this.querySelector(".todo-input").value = "";
});

todoList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches(".edit-todo")) {
    editTodo(e.target);
  } else if (e.target.matches(".remove-todo")) {
    removeTodo(e.target);
  } else if (e.target.matches(".btn")) {
    var form = e.target.parentElement.parentElement;
    var valueInput = form.querySelector(".todo-input").value;
    if (valueInput.trim() === "") {
      removeTodo(e.target);
    } else {
      var html = returnHtml(valueInput);
      form.insertAdjacentHTML("beforebegin", html);
      form.parentElement.removeChild(form);
    }
  }
});
