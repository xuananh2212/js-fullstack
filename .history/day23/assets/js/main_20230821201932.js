const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

if (btn) {
  btn.addEventListener("click", function (e) {
    if (modal) {
      modal.classList.toggle("is-show");
    }
  });
}
