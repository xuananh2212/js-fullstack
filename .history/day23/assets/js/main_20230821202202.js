const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

function hanldShowModal(modal) {
  if (modal) {
    modal.classList.toggle("is-show");
  }
}
if (btn) {
  btn.addEventListener("click", hanldShowModal(e));
}

if (overlay) {
  overlay.addEventListener("click", function (e) {});
}
