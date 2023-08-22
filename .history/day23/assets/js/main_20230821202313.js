const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

function handlShowModal(e) {
  if (modal) {
    modal.classList.toggle("is-show");
  }
}
if (btn) {
  btn.addEventListener("click", handlShowModal(e));
}

if (overlay) {
  overlay.addEventListener("click", handlShowModal(e));
}
