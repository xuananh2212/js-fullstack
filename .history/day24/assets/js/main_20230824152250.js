const todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var valueInput = this.querySelector(".todo-input").value;
  console.log(valueInput);
  if (valueInput) {
  }
});