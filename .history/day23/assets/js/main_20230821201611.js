const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

if (btn) {
  btn.addEventListener("click", function (e) {
    if (modal) {
      modal.classList.toggle("is-show");
    }
  });
}
