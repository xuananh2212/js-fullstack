const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

function handlShowModal() {
  if (modal) {
    console.log("handlShowModal");
    modal.classList.toggle("is-show");
  }
}
if (btn) {
  btn.addEventListener("click", handlShowModal);
}

if (overlay) {
  overlay.addEventListener("click", handlShowModal);
}

if (modal.classList.contains("is-show")) {
  const btnRegister = document.querySelector(".btn-register");
  const btnLogin = document.querySelector(".btn-login");
}