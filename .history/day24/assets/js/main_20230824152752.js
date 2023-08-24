const todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var valueInput = this.querySelector(".todo-input").value;
  console.log(valueInput);
  if (valueInput) {
    var html = `<div class="todo">
                <p></p>
                <div class="icon-row">
                    <i class="fa-solid fa-pen-to-square edit-todo"></i>
                    <i class="fa-solid fa-trash remove-todo"></i>
                </div>
            </div>`;
  }
});
